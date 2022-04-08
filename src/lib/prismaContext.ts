import { IPrismaContext } from './interface/IPrismaContext'
import { prisma } from '../db/db.connection'

const prismaContext: IPrismaContext = {
  prisma
}

export default prismaContext
