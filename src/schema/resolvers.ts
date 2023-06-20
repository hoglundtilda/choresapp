import { Resolvers } from '../_generated/graphql'
import {
  userMutationResolver,
  userObjectResolver,
  userQueryResolver
} from './user/user.resolver'
import { sharedSchemaResolver } from './shared/shared.resolver'
import {
  categoryMutationResolver,
  categoryObjectResolver,
  categoryQueryResolver
} from './category/category.resolver'
import {
  activityMutationResolver,
  activityObjectResolver,
  activityQueryResolver
} from './activity/activity.resolver'
import {
  timeRecordMutationResolver,
  timeRecordObjectResolver,
  timeRecordQueryResolver
} from './timeRecord/timeRecord.resolver'

export const resolvers: Resolvers = {
  Query: {
    ...userQueryResolver,
    ...categoryQueryResolver,
    ...activityQueryResolver,
    ...timeRecordQueryResolver
  },

  Mutation: {
    ...userMutationResolver,
    ...categoryMutationResolver,
    ...activityMutationResolver,
    ...timeRecordMutationResolver
  },

  ...userObjectResolver,
  ...categoryObjectResolver,
  ...activityObjectResolver,
  ...timeRecordObjectResolver,
  ...sharedSchemaResolver
}

