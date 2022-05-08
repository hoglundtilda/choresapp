import { PrismaClient } from '../_generated/client'
import { logger } from '../lib'

export const prisma = new PrismaClient()
export const ConnectPrismaClient = async () => {
  try {
    await prisma.$connect()
    logger.info('Prisma connection established')
  } catch (e) {
    logger.info('Error starting prisma client', e)
    throw e
  }
}
export { }
