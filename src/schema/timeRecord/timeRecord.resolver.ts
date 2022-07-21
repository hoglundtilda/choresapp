import { AuthenticationError } from 'apollo-server-express'
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
  // createTimeRecord: async (_, { choreId, input }, ctx) => {
  //   if (!ctx.user) throw new AuthenticationError('Must be signed in')
  //   if (!choreId) throw new UserInputError('No chore id provided', {
  //     argumentName: 'id'
  //   })
  //   if (!input.amount) throw new UserInputError('No input provided', { argumentName: 'input' })
  //   if (!input.date) throw new UserInputError('No input provided', { argumentName: 'input' })

  //   try {
  //     const timeRecord = await ctx.prisma.timeRecord.create({
  //       data: {
  //         amount: input.amount,
  //         date: input.date,
  //         chore: { connect: { id: choreId } },
  //         owner: { connect: { id: ctx.user.id } }
  //       }
  //     })



  //     return timeRecord

  //   } catch (e) {
  //     throw new Error(e)
  //   }
  // }

}

export const timeRecordObjectResolver: Resolvers = {
  TimeRecord: {
    id: (parent) => parent.id,
    amount: (parent) => parent.amount,
    date: (parent) => parent.date,
    createdAt: (parent) => parent.date,
    updatedAt: (parent) => parent.updatedAt,

  },


}
