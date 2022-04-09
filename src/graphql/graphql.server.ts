// import * as http from 'http'
import { ApolloServer } from 'apollo-server-express'
import { typeDefs } from './typeDefs'
import { resolvers } from './resolvers'
import { context } from './context'

export const createApolloServer = () =>
// httpServer: http.Server
{
  try {
    return new ApolloServer({
      typeDefs,
      resolvers,
      introspection: true,

      context: context
    })
  } catch (e) {
    console.error('Error createApolloServer', e)
    return e
  }
}
