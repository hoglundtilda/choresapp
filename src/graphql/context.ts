import { PrismaClient } from '@prisma/client'
import { prisma } from '../db/db.connection'

// import { DataLoaders } from './dataloaders'

export interface Context {
  prisma: PrismaClient
}


export const context: Context = {
  prisma
}
