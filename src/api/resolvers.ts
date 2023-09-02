import {
  activityMutationResolver,
  activityObjectResolver,
  activityQueryResolver
} from './activity/activity.resolver'
import {
  categoryMutationResolver,
  categoryObjectResolver,
  categoryQueryResolver
} from './category/category.resolver'
import {
  streakMutationResolver,
  streakObjectResolver,
  streakQueryResolver
} from './streak/streak.resolver'
import {
  timeRecordMutationResolver,
  timeRecordObjectResolver,
  timeRecordQueryResolver
} from './timeRecord/timeRecord.resolver'
import {
  userMutationResolver,
  userObjectResolver,
  userQueryResolver
} from './user/user.resolver'

import { Resolvers } from '../_generated/graphql'
import { sharedSchemaResolver } from './shared/shared.resolver'

export const resolvers: Resolvers = {
  Query: {
    ...userQueryResolver,
    ...categoryQueryResolver,
    ...activityQueryResolver,
    ...timeRecordQueryResolver,
    ...streakQueryResolver
  },

  Mutation: {
    ...userMutationResolver,
    ...categoryMutationResolver,
    ...activityMutationResolver,
    ...timeRecordMutationResolver,
    ...streakMutationResolver
  },

  ...userObjectResolver,
  ...categoryObjectResolver,
  ...activityObjectResolver,
  ...timeRecordObjectResolver,
  ...streakObjectResolver,
  ...sharedSchemaResolver
}

