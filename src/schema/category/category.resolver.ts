import { AuthenticationError } from 'apollo-server-express'
import {
  MutationResolvers,
  QueryResolvers,
  Resolvers
} from '../../_generated/graphql'

export const categoryQueryResolver: QueryResolvers = {
  categoryCollection: async (_, { userId }, ctx) => {
    if (!ctx.user) throw new AuthenticationError('Must be signed in')
    try {
      return await ctx.prisma.category.findMany({
        where: {
         user_id: userId
        },
        include: {
          chores: true
        },
      })
    } catch (e) {
      throw new Error(e)
    }
  },

  // loginUser: async (_, { input }, ctx) => {
  //   try {
  //     const user = await ctx.prisma.user.findUnique({
  //       where: {
  //         email: input.email
  //       }
  //     })
  //     if (user) {
  //       const correctPassword = await comparePassword(
  //         input.password,
  //         user.password
  //       )
  //       if (!correctPassword) throw new Error('Wrong password provided')

  //       const token = jwtSign(user.id)

  //       return { token, userId: user.id }
  //     } else {
  //       throw new Error('Wrong email provided')
  //     }
  //   } catch (e) {
  //     throw new Error(e)
  //   }
  // }
}

export const userMutationResolver: MutationResolvers = {
  // createUser: async (_, { input }, ctx) => {
  //   if (!input.displayName || input.displayName.length < 2)
  //     throw new UserInputError('Not a valid display name', {
  //       argumentName: 'displayName'
  //     })
  //   if (!input.email)
  //     throw new UserInputError('Must provide a valid email', {
  //       argumentName: 'email'
  //     })
  //   if (!input.password)
  //     throw new UserInputError('Must provide a valid password', {
  //       argumentName: 'password'
  //     })
  //   if (!input) throw new Error('No input provided')

  //   try {
  //     const hashedPassword = await createPassword(input.password)
  //     return ctx.prisma.user.create({
  //       data: {
  //         email: input.email,
  //         display_name: input.displayName,
  //         password: hashedPassword
  //       }
  //     })
  //   } catch (e) {
  //     throw new Error(e)
  //   }
  // },

  // updateUser: async (_, { userId, input }, ctx) => {
  //   if (!ctx.user) throw new AuthenticationError('User not authenticated')
  //   if (!userId)
  //     throw new AuthenticationError('User not authenticated', {
  //       argumentName: 'userId'
  //     })
  //   if (!input.displayName || input.displayName.length < 2)
  //     throw new UserInputError('Not a valid display name', {
  //       argumentName: 'displayName'
  //     })

  //   try {
  //     return ctx.prisma.user.update({
  //       where: { id: String(userId) },
  //       data: {
  //         display_name: input.displayName
  //       }
  //     })
  //   } catch (e) {
  //     throw new Error(e)
  //   }
  // }
}

export const categoryObjectResolver: Resolvers = {
  Category: {
    id: (category) => category.id,
    owner: (category) => category.owner,
    title: (category) => category.title,
    chores: (category) => category.chores
  // }
}
