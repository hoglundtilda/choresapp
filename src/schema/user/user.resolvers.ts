import { hashPw, } from '../../services'
import {
  MutationResolvers,
  QueryResolvers,
  Resolvers
} from '../../_generated/graphql'

// import { findOrCreate } from '../../services/authService/Passport.Strategy'

export const userQueryResolver: QueryResolvers = {
  user: async (_, { userId }, ctx) => {
    // if (!ctx.user) throw new Error('User not authenticated')
    try {
      return ctx.prisma.user.findUnique({
        where: {
          id: userId
        }
      })
    } catch (e) {
      throw new Error('Error findUserById', e)
    }
  }

  // login: async (parent, { }, ctx) => {
  //   return ctx.getUser()
  // }
}

export const userMutationResolver: MutationResolvers = {
  createUser: async (_, { input }, ctx) => {
    if (!input) throw new Error('No input provided')

    try {
      const hashedPw = await hashPw(input.password)
      const { password, ...user } = await ctx.prisma.user.create({
        data: {
          email: input.email,
          display_name: input.displayName,
          password: hashedPw
        }
      })
      console.log(user)
      // const token = await jwtSign(user.id)
      return {
        token: 'hej', user
      }
    } catch (e) {
      console.error(e)
      throw new Error('Error createUser', e)
    }
  },

  updateUser: async (_, { userId, input }, ctx) => {
    if (!userId) throw new Error('No userId provided')

    try {
      if (input.displayName) {
        return ctx.prisma.user.update({
          where: { id: String(userId) },
          data: {
            display_name: input.displayName
          }
        })
      } else {
        throw new Error('No input provided')
      }
    } catch (e) {
      throw new Error('Error updateUser', e)
    }
  }
}

export const userObjectResolver: Resolvers = {
  User: {
    userId: (user) => user.id,
    email: (user) => user.email,
    displayName: (user) => user.display_name,
    // googleId: (user) => user.google_id
  }
}
