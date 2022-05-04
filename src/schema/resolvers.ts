import { Resolvers } from '../_generated/graphql'
import {
  userMutationResolver,
  userObjectResolver,
  userQueryResolver
} from './user/user.resolvers'

export const resolvers: Resolvers = {
  Query: {
    ...userQueryResolver
  },

  Mutation: {
    ...userMutationResolver
  },

  ...userObjectResolver
}

