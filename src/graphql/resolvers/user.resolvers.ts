import { User } from '@prisma/client';

// TODO types
export const userQueryResolver = ({
  user: async (_: any, { userId }: any, ctx: any) => {
    // if (!userId) throw new Error('UserId not provided')
    // return prisma.user.findFirst({ where: { userId: String(userId) } })
    // const user = await findUserById(userId)
    // if (!user) return null
    // return user
    return ctx.prisma.user.findUnique({
      where: {
        id: userId,
      },
    });
  }
})

// export const userMutationResolver = asPartialMutationResolver({
//   createUser: async (_, { input }): Promise<any> => {
//     // if (!input) return 'No input'
//     // try {
//     //   return prisma.user.create({
//     //     data: {
//     //       email: input.email,
//     //       display_name: input.displayName
//     //     }
//     //   })
//     // } catch (e) {
//     //   return { Error: e, message: 'Error creating user' }
//     // }

//   },

//   updateUser: async (_, { userId, input }, ctx): Promise<any> => {
//     // if (!userId) throw new Error('Missing userId')

//     // if (input.displayName) {
//     //   return prisma.user.update({
//     //     where: { id: String(userId) },
//     //     data: {
//     //       display_name: input.displayName
//     //     }
//     //   })
//     // }

//     // return 'No displayName given'
//   }
// })

export const userObjectResolver = ({
  User: {

    userId: (user: User) => user.id,
    email: (user: User) => user.email,
    displayName: (user: User) => user.display_name
  }
})
