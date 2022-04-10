// import * as http from 'http'
import { ApolloServer } from 'apollo-server-express'
import { typeDefs } from './typeDefs'
import { resolvers } from './resolvers'
// import { context } from './context'

export const createApolloServer = () =>
  // httpServer: http.Server
  {
    try {
      return new ApolloServer({
        typeDefs: typeDefs,
        resolvers: resolvers,
        introspection: true,
        context: ({ req }) => {
          // Maybe token here
          const user = req.user ? req.user : null
          // logout: () => req.logout()
          return user
        }
      })
    } catch (e) {
      console.error('Error createApolloServer', e)
      return e
    }
  }
