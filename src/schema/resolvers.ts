import { Resolvers } from '../_generated/graphql'
import {
  userMutationResolver,
  userObjectResolver,
  userQueryResolver
} from './user/user.resolver'
import { sharedSchemaResolver } from './shared/shared.resolver'
import { categoryMutationResolver, categoryObjectResolver, categoryQueryResolver } from './category/category.resolver'
import { choreMutationResolver, choreObjectResolver, choreQueryResolver } from './chore/chore.resolver'
import { timeRecordMutationResolver, timeRecordObjectResolver, timeRecordQueryResolver } from './timeRecord/timeRecord.resolver'

export const resolvers: Resolvers = {
  Query: {
    ...userQueryResolver,
    ...categoryQueryResolver,
    ...choreQueryResolver,
    ...timeRecordQueryResolver
  },

  Mutation: {
    ...userMutationResolver,
    ...categoryMutationResolver,
    ...choreMutationResolver,
    ...timeRecordMutationResolver

  },
  ...userObjectResolver,
  ...categoryObjectResolver,
  ...choreObjectResolver,
  ...timeRecordObjectResolver,
  ...sharedSchemaResolver,


}

