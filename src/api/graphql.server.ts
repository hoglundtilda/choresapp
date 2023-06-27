import * as http from 'http'
import { ApolloServer } from 'apollo-server-express'
import {
  ApolloServerPluginDrainHttpServer,
  ApolloServerPluginLandingPageGraphQLPlayground,
  ApolloServerPluginLandingPageLocalDefault
} from 'apollo-server-core'
import { PrismaClient } from '@prisma/client'

import { resolvers } from './resolvers'
import { typeDefs } from './typeDefs'
import { jwtVerify } from '../services/jwt.service'
import { getUser } from '../services/auth.service'
import { RequiredSettings } from '../settings/env'
import { GraphqlContext } from '../types/Context.type'

const prisma = new PrismaClient()
export const createApolloServer = (httpServer: http.Server) => {
  const server = new ApolloServer({
    typeDefs: typeDefs,
    resolvers: resolvers,
    introspection: true,
    // introspection: RequiredSettings.environment !== 'production',

    plugins: [
      RequiredSettings.environment === 'production'
        ? ApolloServerPluginLandingPageGraphQLPlayground()
        : ApolloServerPluginLandingPageLocalDefault({ footer: false }),
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

