import { AuthenticationError, UserInputError } from 'apollo-server-express'
import {
  MutationResolvers,
  QueryResolvers,
  Resolvers
} from '../../_generated/graphql'
import { comparePassword, createPassword, jwtSign } from '../../services'

export const userQueryResolver: QueryResolvers = {
  getUser: async (_, { userId }, ctx) => {
    if (!ctx.user) throw new AuthenticationError('Must be signed in')

    try {
      return await ctx.prisma.user.findUniqueOrThrow({
        where: {
          id: userId
        }
      })
    } catch (e) {
      throw new Error(e)
    }
  },

  loginUser: async (_, { input }, ctx) => {
    try {
      const user = await ctx.prisma.user.findUniqueOrThrow({
        where: {
          email: input.email
        }
      })
      if (user) {
        const correctPassword = await comparePassword(
          input.password,
          user.password
        )
        if (!correctPassword) throw new Error('Wrong password provided')

        const token = jwtSign(user.id)

        return { token, userId: user.id }
      } else {
        throw new Error('Wrong email provided')
      }
    } catch (e) {
      throw new Error(e)
    }
  }
}

export const userMutationResolver: MutationResolvers = {
  createUser: async (_, { input }, ctx) => {
    if (!input.name || input.name.length < 2)
      throw new UserInputError('Not a valid name name', {
        argumentName: 'name'
      })
    if (!input.email)
      throw new UserInputError('Must provide a valid email', {
        argumentName: 'email'
      })
    if (!input.password)
      throw new UserInputError('Must provide a valid password', {
        argumentName: 'password'
      })
    if (!input) throw new Error('No input provided')

    try {
      const hashedPassword = await createPassword(input.password)
      return ctx.prisma.user.create({
        data: {
          email: input.email,
          name: input.name,
          password: hashedPassword
        }
      })
    } catch (e) {
      throw new Error(e)
    }
  },

  updateUser: async (_, { userId, input }, ctx) => {
    if (!ctx.user) throw new AuthenticationError('User not authenticated')
    if (!userId)
      throw new UserInputError('User not authenticated', {
        argumentName: 'userId'
      })
    if (!input.name || input.name.length < 2)
      throw new UserInputError('Not a valid name', {
        argumentName: 'name'
      })

    try {
      return await ctx.prisma.user.update({
        where: { id: userId },
        data: {
          name: input.name
        }
      })
    } catch (e) {
      throw new Error(e)
    }
  }
}

export const userObjectResolver: Resolvers = {
  User: {
    id: (user) => user.id,
    createdAt: (user) => user.createdAt,
    email: (user) => user.email,
    name: (user) => user.name
  },

  AuthPayload: {
    token: (parent) => parent.token,
    userId: (parent) => parent.userId
  },
  CreateUserPayload: {
    email: (parent) => parent.email
  }
}

