import { User } from "src/_generated/graphql";
import { PrismaClient } from "@prisma/client";

export type GraphqlContext = {
  prisma: PrismaClient,
  user: User | null
}
