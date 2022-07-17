import { userSchema } from './user/user.schema'
import { sharedSchema } from './shared/shared.schema'
import { categorySchema } from './category/category.schema'
import { choreSchema } from './chore/chore.schema'

export const typeDefs = [
  categorySchema,
  sharedSchema,
  choreSchema,
  // timeRecordSchema,
  userSchema
]
