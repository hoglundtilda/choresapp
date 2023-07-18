import { gql } from 'apollo-server-core'

export const activitySchema = gql`
  extend type Query {
    activityCollection(userId: ID!): ActivityCollection
    activity(activityId: ID!): Activity
  }

  extend type Mutation {
    createActivity(userId: ID!, input: ActivityCreateInput!): Activity
    updateActivity(activityId: ID!, input: ActivityUpdateInput!): Activity
    deleteActivities(input: ActivitiesDeleteInput!): [ID]
  }

  type Activity {
    id: ID!
    name: String!
    createdAt: DateTime!
    updatedAt: DateTime
    startDate: DateTime!
    endDate: DateTime
    owner: User!
    category: Category
    timeRecords: [TimeRecord]
    totalTimeTraced: Float!
  }

  type ActivityCollection {
    activities: [Activity]
  }

  input ActivityCreateInput {
    categoryId: ID!
    name: String!
    startDate: DateTime!
  }

  input ActivityUpdateInput {
    name: String
    startDate: DateTime!
    endDate: DateTime
  }

  input ActivitiesDeleteInput {
    activityIds: [ID!]!
    cascade: Boolean
  }
`

