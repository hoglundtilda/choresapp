// import * as http from 'http'

import { ApolloServer } from 'apollo-server-express'
import { typeDefs } from './typeDefs'
import { resolvers } from './resolvers/resolvers'
// import { prisma } from '../db/db.connection'
// import { apolloServerContext } from '../lib'

export const createApolloServer = () =>
  // httpServer: http.Server
  {
    try {
      return new ApolloServer({
        typeDefs,
        resolvers,
        introspection: true

        // plugins: [
        //   ApolloServerPluginLandingPageGraphQLPlayground(),
        //   ApolloServerPluginDrainHttpServer({ httpServer }),
        // ],

        // context: {
        //   apolloServerContext
        // }
      })
    } catch (e) {
      console.error('Error createApolloServer', e)
      return e
    }
  }
