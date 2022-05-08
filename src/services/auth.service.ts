// import { prisma } from "../db/db.connection"

import { PrismaClient } from "src/_generated/client"
// import { User } from "src/_generated/graphql"


export const getUser = async (userId: string, prisma: PrismaClient) => {

  try {
    const user = await prisma.user.findUnique({
      where: {
        id: userId
      }
    })
    if (!user) return null
    return { userId: user.id, displayName: user.display_name, email: user.email, createdAt: user.created_at }
  } catch (e) {
    throw new Error(e)
  }

}
