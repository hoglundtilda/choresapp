// import { prisma } from "../db/db.connection"

import { PrismaClient } from '@prisma/client';
// import { User } from "src/_generated/graphql"

export const getUser = async (userId: string, prisma: PrismaClient) => {
  console.log('here');
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: userId
      }
    });
    if (!user) return null;
    return {
      userId: user.id,
      name: user.name,
      email: user.email,
      createdAt: user.createdAt
    };
  } catch (e) {
    throw new Error(e);
  }
};

