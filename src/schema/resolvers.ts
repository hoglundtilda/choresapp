import { Resolvers } from '../_generated/graphql'
import {
  userMutationResolver,
  userObjectResolver,
  userQueryResolver
} from './user/user.resolver'
import { sharedSchemaResolver } from './shared/shared.resolver'
import { categoryMutationResolver, categoryObjectResolver, categoryQueryResolver } from './category/category.resolver'
import { choreMutationResolver, choreObjectResolver, choreQueryResolver } from './chore/chore.resolver'

export const resolvers: Resolvers = {
  Query: {
    ...userQueryResolver,
    ...categoryQueryResolver,
    ...choreQueryResolver
  },

  Mutation: {
    ...userMutationResolver,
    ...categoryMutationResolver,
    ...choreMutationResolver

  },
  ...userObjectResolver,
  ...categoryObjectResolver,
  ...choreObjectResolver,
  ...sharedSchemaResolver,

}

