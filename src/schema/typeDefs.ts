import { userSchema } from './user/user.schema'
import { sharedSchema } from './shared/shared.schema'
import { categorySchema } from './category/category.schema'
import { activitySchema } from './activity/activity.schema'
import { timeRecordSchema } from './timeRecord/timeRecord.schema'

export const typeDefs = [
  categorySchema,
  sharedSchema,
  activitySchema,
  timeRecordSchema,
  userSchema
]
