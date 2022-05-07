import { comparePassword, createPassword } from '../../services'
import {
  MutationResolvers,
  QueryResolvers,
  Resolvers
} from '../../_generated/graphql'

// import { findOrCreate } from '../../services/authService/Passport.Strategy'

export const userQueryResolver: QueryResolvers = {
  getUser: async (_, { userId }, ctx) => {
    if (!userId) throw new Error('Internal server error')
    try {
      return ctx.prisma.user.findUnique({
        where: {
          id: userId
        }
      })
    } catch (e) {
      throw new Error(e)
    }
  },

  loginUser: async (_, { input }, ctx) => {
    if (!input) throw new Error('No input provided')

    try {
      const user = await ctx.prisma.user.findUnique({
        where: {
          email: input.email
        }
      })
      if (user) {
        const correctPassword = await comparePassword(input.password, user.password)
        if (!correctPassword) throw new Error('Wrong password provided')

        return { token: 'hej', userId: user.id }

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
    if (!input) throw new Error('No input provided')

    try {
      const hashedPassword = await createPassword(input.password)
      return ctx.prisma.user.create({
        data: {
          email: input.email,
          display_name: input.displayName,
          password: hashedPassword
        }
      })


    } catch (e) {
      throw new Error(e)
    }
  },

  updateUser: async (_, { userId, input }, ctx) => {
    if (!userId) throw new Error('Internal server error')
    if (!input.displayName) throw new Error('Name can not be empty')

    try {
      return ctx.prisma.user.update({
        where: { id: String(userId) },
        data: {
          display_name: input.displayName
        }
      })

    } catch (e) {
      throw new Error(e)
    }
  }
}

export const userObjectResolver: Resolvers = {
  User: {
    userId: (user) => user.id,
    createdAt: (user) => user.created_at,
    email: (user) => user.email,
    displayName: (user) => user.display_name,
    // googleId: (user) => user.google_id
  }
}
