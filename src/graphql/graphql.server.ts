// import * as http from 'http'
import { ApolloServer } from 'apollo-server-express'
import { buildSubgraphSchema } from '@apollo/subgraph'

import { typeDefs } from './typeDefs'
import { resolvers } from './resolvers'
import { context } from './context'

export const createApolloServer = () =>
// httpServer: http.Server
{
  try {
    return new ApolloServer({
      // need subgraph to build from separate files (?)
      schema: buildSubgraphSchema({
        typeDefs: typeDefs,
        resolvers: resolvers
      }),
      introspection: true,

      context: context
    })
  } catch (e) {
    console.error('Error createApolloServer', e)
    return e
  }
}
