import { AuthenticationError, UserInputError } from 'apollo-server-express'
import {
  MutationResolvers,
  QueryResolvers,
  Resolvers
} from '../../_generated/graphql'

export const timeRecordQueryResolver: QueryResolvers = {
  timeRecord: async (_, { timeRecordId }, ctx) => {
    if (!ctx.user) throw new AuthenticationError('Must be signed in')

    try {
      return ctx.prisma.timeRecord.findUniqueOrThrow({
        where: {
          id: timeRecordId
        },
        include: {
          owner: true,
          chore: true
        }
      })
    } catch (e) {
      throw new Error(e)
    }
  }
}

export const timeRecordMutationResolver: MutationResolvers = {
  createTimeRecord: async (_, { userId, input }, ctx) => {
    if (!ctx.user) throw new AuthenticationError('Must be signed in')
    if (!userId)
      throw new UserInputError('No userId provided', {
        argumentName: 'userId'
      })
    if (!input.choreId)
      throw new UserInputError('No chore id provided', {
        argumentName: 'choreId'
      })
    if (!input.amount)
      throw new UserInputError('No input provided', { argumentName: 'input' })
    if (!input.date)
      throw new UserInputError('No input provided', { argumentName: 'input' })

    try {
      return await ctx.prisma.timeRecord.create({
        data: {
          amount: input.amount,
          date: input.date,
          chore: { connect: { id: input.choreId } },
          owner: { connect: { id: userId } }
        },
        include: {
          chore: true,
          owner: true
        }
      })
    } catch (e) {
      throw new Error(e)
    }
  },

  updateTimeRecord: async (_, { timeRecordId, input }, ctx) => {
    if (!ctx.user) throw new AuthenticationError('Must be signed in')
    if (!timeRecordId)
      throw new UserInputError('No timeRecord id provided', {
        argumentName: 'timeRecordId'
      })

    try {
      return await ctx.prisma.timeRecord.update({
        where: { id: timeRecordId },
        data: {
          amount: input?.amount || undefined,
          date: input?.date || undefined,
          chore: { connect: { id: input?.choreId || undefined } }
        },
        include: {
          chore: true,
          owner: true
        }
      })
    } catch (e) {
      throw new Error(e)
    }
  },

  deleteTimeRecords: async (_, { input }, ctx) => {
    if (!ctx.user) throw new AuthenticationError('Must be signed in')
    if (!input) throw new UserInputError('No isd provided')

    try {
      await ctx.prisma.timeRecord.deleteMany({
        where: { id: { in: input.timeRecordIds } }
      })
      return input.timeRecordIds
    } catch (e) {
      throw new Error(e)
    }
  }
}

export const timeRecordObjectResolver: Resolvers = {
  TimeRecord: {
    id: (parent) => parent.id,
    amount: (parent) => parent.amount,
    date: (parent) => parent.date,
    createdAt: (parent) => parent.createdAt,
    updatedAt: (parent) => parent.updatedAt,
    owner: (parent) => parent.owner,
    chore: (parent) => parent.chore
  },
  TimeRecordCollection: {
    timeRecords: (parent) => parent.timeRecords
  }
}
