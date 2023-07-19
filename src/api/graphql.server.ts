import * as http from 'http'

import {
  ApolloServerPluginDrainHttpServer,
  ApolloServerPluginLandingPageLocalDefault
} from 'apollo-server-core'
import { getUser, jwtVerify } from '../services'

import { ApolloServer } from 'apollo-server-express'
import { GraphqlContext } from '../types/Context.type'
import { PrismaClient } from '@prisma/client'
// import { RequiredSettings } from '../settings/env'
import { resolvers } from './resolvers'
import { typeDefs } from './typeDefs'

const prisma = new PrismaClient()
export const createApolloServer = (httpServer: http.Server) => {
  const server = new ApolloServer({
    typeDefs: typeDefs,
    resolvers: resolvers,
    introspection: true,
    // introspection: RequiredSettings.environment !== 'production',

    plugins: [
      // RequiredSettings.environment === 'production'
      //   ? ApolloServerPluginLandingPageGraphQLPlayground()
      //   : ApolloServerPluginLandingPageLocalDefault({ footer: false }),
      ApolloServerPluginLandingPageLocalDefault({ footer: false }),
      ApolloServerPluginDrainHttpServer({ httpServer })
    ],

    context: async ({ req }) => {
      let user = null
      const authHeader = req.headers.authorization

      if (authHeader) {
        const parts = authHeader.split(' ')

        if (parts.length === 2 && parts[0] === 'Bearer') {
          const token = parts[1]
          const userId = jwtVerify(token!)
          user = userId ? await getUser(userId, prisma) : null
        }
      }

      return { user, prisma } as GraphqlContext
    }
  })

  return server
}

