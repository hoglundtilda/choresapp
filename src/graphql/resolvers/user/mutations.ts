// import { prisma } from 'db/db.connection'

// export const userMutations = {
//   createUser: (_: any, args: any) => {
//     return prisma.user.create({
//       data: {
//         email: args.email,
//         display_name: args.fullName,
//         password: args.password
//       }
//     })
//   },

//   updateUser: (_: any, args: any) => {
//     return prisma.user.update({
//       where: { id: String(args.user_id) },
//       data: {
//         display_name: args.display_name
//       }
//     })
//   }
// }
