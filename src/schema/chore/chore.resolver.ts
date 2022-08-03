import { AuthenticationError, UserInputError } from 'apollo-server-express'
import {
  MutationResolvers,
  QueryResolvers,
  Resolvers
} from '../../_generated/graphql'

export const choreQueryResolver: QueryResolvers = {
  choreCollection: async (_, { userId }, ctx) => {
    if (!userId)
      throw new UserInputError('No userId provided', {
        argumentName: 'userId'
      })
    try {
      const chores = await ctx.prisma.chore.findMany({
        where: { userId: userId },
        include: {
          owner: true
        }
      })
      return { chores }
    } catch (e) {
      throw new Error(e)
    }
  },

  chore: async (_, { choreId }, ctx) => {
    if (!ctx.user) throw new AuthenticationError('Must be signed in')

    try {
      return ctx.prisma.chore.findUniqueOrThrow({
        where: { id: choreId }
      })
    } catch (e) {
      throw new Error(e)
    }
  }
}

export const choreMutationResolver: MutationResolvers = {
  deleteChores: async (_, { input }, ctx) => {
    if (!ctx.user) throw new AuthenticationError('Must be signed in')
    if (!input.choreIds.length)
      throw new UserInputError('No chore ids provided', {
        argumentName: 'id'
      })

    try {
      // TODO track which ids got deleted instead
      await ctx.prisma.chore.deleteMany({
        where: { id: { in: input.choreIds } }
      })
      return input.choreIds
    } catch (e) {
      throw new Error(e)
    }
  },

  updateChore: async (_, { choreId, input }, ctx) => {
    if (!ctx.user) throw new AuthenticationError('Must be signed in')
    try {
      return ctx.prisma.chore.update({
        where: { id: choreId },
        data: {
          label: input?.label || undefined,
          startDate: input?.startDate || undefined,
          endDate: input?.endDate || undefined
        }
      })
    } catch (e) {
      throw new Error(e)
    }
  },

  createChore: async (_, { userId, input }, ctx) => {
    if (!ctx.user) throw new AuthenticationError('Must be signed in')
    if (!input.label)
      throw new UserInputError('Label needs to be provided', {
        argumentName: 'label'
      })
    try {
      const chore = await ctx.prisma.chore.create({
        data: {
          label: input.label,
          owner: { connect: { id: userId } },
          startDate: input.startDate || Date.now()
        }
      })
      if (input.categoryId && chore.id) {
        await ctx.prisma.category.update({
          where: { id: input.categoryId },
          data: { chores: { connect: { id: chore.id } } }
        })
      }

      return chore
    } catch (e) {
      throw new Error(e)
    }
  }
}

export const choreObjectResolver: Resolvers = {
  Chore: {
    id: (parent) => parent.id,
    label: (parent) => parent.label,
    startDate: (parent) => parent.startDate,
    endDate: (parent) => parent.endDate,
    owner: (parent, _, ctx) => {
      return ctx.prisma.user.findUniqueOrThrow({ where: { id: parent.userId } })
    },
    category: (parent, _, ctx) => {
      if (!parent.categoryId) return null
      return ctx.prisma.category.findUnique({
        where: { id: parent?.categoryId }
      })
    },
    timeRecords: (parent, _, ctx) =>
      ctx.prisma.timeRecord.findMany({
        where: { choreId: parent.id },
        include: { chore: true, owner: true }
      }),
    totalTimeTraced: async (parent, _, ctx) => {
      const records = await ctx.prisma.timeRecord.findMany({
        where: { choreId: parent.id },
        include: { chore: true, owner: true }
      })
      return records.reduce((acc, obj) => {
        return acc + obj.amount
      }, 0)
    }
  },

  ChoreCollection: {
    chores: (parent) => parent.chores
  }
}
