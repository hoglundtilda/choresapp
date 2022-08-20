import { gql } from 'apollo-server-core'

export const activitySchema = gql`
  extend type Query {
    activityCollection(userId: ID!): ActivityCollection
    activity(activityId: ID!): Activity
  }

  extend type Mutation {
    createActivity(userId: ID!, input: ActivityCreateInput!): Activity
    updateActivity(activityId: ID!, input: ActivityUpdateInput!): Activity
    deleteActivity(input: ActivitiesDeleteInput!): [ID]
  }

  type Activity {
    id: ID!
    label: String!
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
    activity: [Activity]
  }

  input ActivityCreateInput {
    categoryId: ID!
    label: String!
    startDate: DateTime!
  }

  input ActivityUpdateInput {
    label: String
    startDate: DateTime!
    endDate: DateTime
  }

  input ActivitiesDeleteInput {
    activityIds: [ID!]!
  }
`
