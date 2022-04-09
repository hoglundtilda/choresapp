import { User } from '@prisma/client';
import { MutationResolvers, QueryResolvers } from '../../_generated/graphql'

// TODO types
export const userQueryResolver: QueryResolvers = ({
  user: async (_, { userId }, ctx) => {
    if (!userId) throw new Error('UserId not provided')
    try {
      return ctx.prisma.user.findUnique({
        where: {
          id: userId,
        },
      });
    } catch (e) {
      throw new Error('Error findUserById', e)
    }

  }
})

export const userMutationResolver: MutationResolvers = ({
  createUser: async (_, { input }, ctx) => {
    if (!input) throw new Error('No input provided')
    try {
      return ctx.prisma.user.create({
        data: {
          email: input.email,
          display_name: input.displayName
        }
      })
    } catch (e) {
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
})

export const userObjectResolver = ({
  User: {
    userId: (user: User) => user.id,
    email: (user: User) => user.email,
    displayName: (user: User) => user.display_name
  }
})
