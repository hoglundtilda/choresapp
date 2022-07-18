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
  },
}

export const timeRecordMutationResolver: MutationResolvers = {


}

export const timeRecordObjectResolver: Resolvers = {
  TimeRecord: {
    id: (parent) => parent.id,
    amount: (parent) => parent.amount,
    date: (parent) => parent.date
  },


}
