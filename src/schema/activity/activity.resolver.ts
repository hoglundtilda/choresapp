import { AuthenticationError, UserInputError } from 'apollo-server-express'
import {
  MutationResolvers,
  QueryResolvers,
  Resolvers
} from '../../_generated/graphql'

export const activityQueryResolver: QueryResolvers = {
  activityCollection: async (_, { userId }, ctx) => {
    if (!userId)
      throw new UserInputError('No userId provided', {
        argumentName: 'userId'
      })
    try {
      const activity = await ctx.prisma.activity.findMany({
        where: { userId: userId },
        include: {
          owner: true
        }
      })
      return { activity }
    } catch (e) {
      throw new Error(e)
    }
  },

  activity: async (_, { activityId }, ctx) => {
    if (!ctx.user) throw new AuthenticationError('Must be signed in')

    try {
      return ctx.prisma.activity.findUniqueOrThrow({
        where: { id: activityId }
      })
    } catch (e) {
      throw new Error(e)
    }
  }
}

export const activityMutationResolver: MutationResolvers = {
  deleteActivities: async (_, { input }, ctx) => {
    if (!ctx.user) throw new AuthenticationError('Must be signed in')
    if (!input.activityIds.length)
      throw new UserInputError('No activity ids provided', {
        argumentName: 'id'
      })

    try {
      // TODO track which ids got deleted instead
      await ctx.prisma.activity.deleteMany({
        where: { id: { in: input.activityIds } }
      })
      return input.activityIds
    } catch (e) {
      throw new Error(e)
    }
  },

  updateActivity: async (_, { activityIds, input }, ctx) => {
    if (!ctx.user) throw new AuthenticationError('Must be signed in')
    try {
      return ctx.prisma.activity.update({
        where: { id: activityIds },
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

  createActivity: async (_, { userId, input }, ctx) => {
    if (!ctx.user) throw new AuthenticationError('Must be signed in')
    if (!input.label)
      throw new UserInputError('Label needs to be provided', {
        argumentName: 'label'
      })
    try {
      const activity = await ctx.prisma.activity.create({
        data: {
          label: input.label,
          owner: { connect: { id: userId } },
          startDate: input.startDate || Date.now()
        }
      })
      if (input.categoryId && activity.id) {
        await ctx.prisma.category.update({
          where: { id: input.categoryId },
          data: { activities: { connect: { id: activity.id } } }
        })
      }

      return activity
    } catch (e) {
      throw new Error(e)
    }
  }
}

export const activityObjectResolver: Resolvers = {
  Activity: {
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
        where: { activityId: parent.id },
        include: { activity: true, owner: true }
      }),
    totalTimeTraced: async (parent, _, ctx) => {
      const records = await ctx.prisma.timeRecord.findMany({
        where: { activityIds: parent.id },
        include: { activity: true, owner: true }
      })
      return records.reduce((acc, obj) => {
        return acc + obj.amount
      }, 0)
    }
  },

  ActivityCollection: {
    activities: (parent) => parent.activities
  }
}
