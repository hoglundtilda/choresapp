import { IApolloServerContext } from './interface/IApolloServerContext'
import prismaContext from './prismaContext'

export const apolloServerContext: IApolloServerContext = {
  prismaContext
}
