import { PrismaClient, User } from "@prisma/client"

export type GraphqlContext = {
  prisma: PrismaClient,
  user: User | null
}


