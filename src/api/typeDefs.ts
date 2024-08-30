import { activitySchema } from './activity/activity.schema';
import { categorySchema } from './category/category.schema';
import { sharedSchema } from './shared/shared.schema';
import { streakSchema } from './streak/streak.schema';
import { timeRecordSchema } from './timeRecord/timeRecord.schema';
import { userSchema } from './user/user.schema';

export const typeDefs = [
  categorySchema,
  sharedSchema,
  activitySchema,
  timeRecordSchema,
  userSchema,
  streakSchema,
];

