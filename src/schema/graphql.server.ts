// import * as http from 'http'
import { PrismaClient } from '../_generated/client'
import { ApolloServer } from 'apollo-server-express'

import { resolvers } from './resolvers'
import { typeDefs } from './typeDefs'

const prisma = new PrismaClient()
export const createApolloServer = () =>
// httpServer: http.Server
{
  try {
    return new ApolloServer({
      typeDefs: typeDefs,
      resolvers: resolvers,
      introspection: true,
      // context: ({ req }) => {
      //   // Maybe token here
      //   const user = req.user ? req.user : null
      //   // logout: () => req.logout()
      //   return user
      // }
      context: { prisma },
    })
  } catch (e) {
    console.error('Error createApolloServer', e)
    return e
  }
}
