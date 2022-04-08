import { Resolvers } from '../../_generated/graphql'
import {
  userQueryResolver,
  userMutationResolver,
  userObjectResolver
} from './user/index'

export const resolvers: Required<Resolvers> = {
  Query: {
    ...userQueryResolver
  },

  Mutation: {
    ...userMutationResolver
  },

  ...userObjectResolver
}
