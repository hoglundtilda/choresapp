// import {
//   asPartialObjectResolver,
//   asPartialQueryResolver,
//   asPartialMutationResolver
// } from '../../../utils/graphqlResolverUtils'

// import { prisma } from 'db/db.connection'

// export const userQueryResolver = asPartialQueryResolver({
//   user: (_, { email }) => {
//     return prisma.user.findFirst({ where: { email: String(email) } })
//   }
// })

// export const userMutationResolver = asPartialMutationResolver({
//   createUser: (_, args: any) => {
//     return prisma.user.create({
//       data: {
//         email: args.email,
//         display_name: args.fullName,
//         password: args.password
//       }
//     })
//   },

//   updateUser: (_, { userId, input }) => {
//     if (!userId) throw new Error('Missing userId')

//     if (input.displayName) {
//       return prisma.user.update({
//         where: { id: String(userId) },
//         data: {
//           display_name: input.displayName
//         }
//       })
//     }

//     return 'No displayName given'
//   }
// })

// export const userObjectResolver = asPartialObjectResolver({
//   User: {
//     userId: (user) => user.userId,
//     email: (user) => user.email,
//     displayName: (user) => user.displayName
//   }
// })
