import { UserInputError } from 'apollo-server-express'

import {
  MutationResolvers,
  QueryResolvers,
  Resolvers
} from '../../_generated/graphql'

export const choreQueryResolver: QueryResolvers = {
  choreCollection: async (_, { userId }, ctx) => {
    if (!userId) throw new UserInputError('No userId provided', {
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
  }
}

export const choreMutationResolver: MutationResolvers = {
  deleteChores: async (_, { input }, ctx) => {
    if (!input.length) throw new UserInputError('No chore ids provided', {
      argumentName: 'id'
    })

    try {
      // TODO track which ids got deleted instead
      await ctx.prisma.chore.deleteMany({
        where: { id: { in: input } },
      })
      return input
    } catch (e) {
      throw new Error(e)
    }
  }
}

export const choreObjectResolver: Resolvers = {
  Chore: {
    id: (parent) => parent.id,
    label: (parent) => parent.label,
    categoryId: (parent) => parent.categoryId,
    startDate: (parent) => parent.startDate,
    endDate: (parent) => parent.endDate,
  },

  ChoreCollection: {
    chores: (parent) => parent.chores
  }
}
