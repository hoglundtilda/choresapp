// import * as http from 'http'
import { PrismaClient } from '../_generated/client'
// import { getUser } from '../services/auth.service'
import { ApolloServer } from 'apollo-server-express'
import { GraphqlContext } from './context'

import { resolvers } from './resolvers'
import { typeDefs } from './typeDefs'
import { jwtVerify } from '../services/jwt.service'
import { getUser } from '../services/auth.service'

const prisma = new PrismaClient()
export const createApolloServer = () =>
// httpServer: http.Server
{
  try {
    return new ApolloServer({
      typeDefs: typeDefs,
      resolvers: resolvers,
      introspection: true,

      context: async ({ req }) => {
        console.log(req.body.operationName)


        if (req.headers.authorization && req.body.operationName !== 'LoginUser' && req.body.operationName !== 'CreateUser') {
          const token = req.headers.authorization.split(" ")[1] || ''
          const verified = jwtVerify(token)
          const user = verified ? await getUser(verified as string, prisma) : null
          return { user, prisma } as GraphqlContext
        }

        return { prisma } as GraphqlContext

      },
    })
  } catch (e) {
    console.error('Error createApolloServer', e)
    return e
  }
}
