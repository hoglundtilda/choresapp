import { Resolvers } from '../_generated/graphql'

import {
  userQueryResolver,
  userMutationResolver,
  userObjectResolver
} from './resolvers/user.resolvers'

export const resolvers: Resolvers = {
  Query: {
    ...userQueryResolver
  },

  Mutation: {
    ...userMutationResolver
  },

  ...userObjectResolver
}
