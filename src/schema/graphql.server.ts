import * as http from 'http'
import { ApolloServer } from 'apollo-server-express'
import { ApolloServerPluginDrainHttpServer, ApolloServerPluginLandingPageGraphQLPlayground, ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core'
import { PrismaClient } from '@prisma/client'

// import { RequiredSettings } from '../settings/env'
import { GraphqlContext } from './context'
import { resolvers } from './resolvers'
import { typeDefs } from './typeDefs'
import { jwtVerify } from '../services/jwt.service'
import { getUser } from '../services/auth.service'
import { RequiredSettings } from '../settings/env'

const prisma = new PrismaClient()
export const createApolloServer = (httpServer: http.Server
) => {
  try {
    return new ApolloServer({
      typeDefs: typeDefs,
      resolvers: resolvers,
      introspection: true,
      // introspection: RequiredSettings.environment !== 'production' ,

      plugins: [
        RequiredSettings.environment === 'production' ? ApolloServerPluginLandingPageGraphQLPlayground() : ApolloServerPluginLandingPageLocalDefault({ footer: false }),
        ApolloServerPluginDrainHttpServer({ httpServer }),
      ],

      context: async ({ req }) => {

        // if (req.headers.authorization && req.body.operationName !== 'LoginUser' && req.body.operationName !== 'CreateUser') {
        const token = req.headers.authorization?.split(" ")[1] || ''
        const userId = jwtVerify(token)
        const user = userId ? await getUser(userId as string, prisma) : null
        return { user, prisma } as GraphqlContext
        // }

        // return { prisma } as GraphqlContext

      },
    })
  } catch (e) {
    console.error('Error createApolloServer', e)
    return e
  }
}
