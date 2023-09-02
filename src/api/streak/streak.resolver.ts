import { AuthenticationError, UserInputError } from 'apollo-server-core'
import {
  MutationResolvers,
  QueryResolvers,
  Resolvers
} from '../../_generated/graphql'

export const streakQueryResolver: QueryResolvers = {
  streakCollection: async (_, { userId }, ctx) => {
    if (!ctx.user) throw new AuthenticationError('Must be signed in')
    try {
      const streaks = await ctx.prisma.streak.findMany({
        where: { userId: userId }
      })
      return { streaks: streaks }
    } catch (e) {
      throw new Error(e)
    }
  }
}

export const streakMutationResolver: MutationResolvers = {
  createStreak: async (_, { userId, input }, ctx) => {
    if (!ctx.user) throw new AuthenticationError('Must be signed in')
    if (!input.name) throw new UserInputError('Name must be provided')

    try {
      return await ctx.prisma.streak.create({
        data: {
          name: input.name,
          count: input.count ?? 0,
          owner: { connect: { id: userId } }
        }
      })
    } catch (e) {
      throw new Error(e)
    }
  },

  updateStreak: async (_, { streakId, input }, ctx) => {
    if (!ctx.user) throw new AuthenticationError('Must be signed in')
    try {
      return await ctx.prisma.streak.update({
        where: { id: streakId },
        data: {
          name: input.name ?? undefined,
          count: input.count ?? undefined,
          endDate: input.endDate ?? undefined,
          startDate: input.startDate ?? undefined
        }
      })
    } catch (e) {
      throw new Error(e)
    }
  },

  deleteStreaks: async (_, { input }, ctx) => {
    if (!ctx.user) throw new AuthenticationError('Must be signed in')
    try {
      await ctx.prisma.streak.deleteMany({
        where: { id: { in: input.streakIds } }
      })
      return input.streakIds
    } catch (e) {
      throw new Error(e)
    }
  }
}

export const streakObjectResolver: Resolvers = {
  Streak: {
    id: (parent) => parent.id,
    name: (parent) => parent.name,
    count: (parent) => parent.count,
    startDate: (parent) => parent.startDate,
    endDate: (parent) => parent.endDate,
    owner: (parent, _, ctx) => {
      return ctx.prisma.user.findUniqueOrThrow({
        where: { id: parent.userId! }
      })
    }
  },

  StreakCollection: {
    streaks: (parent) => parent.streaks
  }
}

