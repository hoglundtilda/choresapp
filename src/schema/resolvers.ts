import { Resolvers } from '../_generated/graphql'
import {
  userMutationResolver,
  userObjectResolver,
  userQueryResolver
} from './user/user.resolver'
import { sharedSchemaResolver } from './shared/shared.resolver'

export const resolvers: Resolvers = {
  Query: {
    ...userQueryResolver
  },

  Mutation: {
    ...userMutationResolver
  },
  ...sharedSchemaResolver,
  ...userObjectResolver
}

