import { PrismaClient, User } from '@prisma/client'
// import { prisma } from '../db/db.connection'

// import { DataLoaders } from './dataloaders'

export interface Context {
  prisma: PrismaClient
  user: User
}

// export const context: Context = {
//   prisma
// }
