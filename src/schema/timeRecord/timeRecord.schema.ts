import { gql } from 'apollo-server-core'

export const timeRecordSchema = gql`
  extend type Query {
    timeRecord(timeRecordId: ID!): TimeRecord
    timeRecordCollection(activityId: ID!): TimeRecordCollection
  }

  extend type Mutation {
    createTimeRecord(userId: ID!, input: TimeRecordCreateInput!): TimeRecord
    updateTimeRecord(
      timeRecordId: ID!
      input: TimeRecordUpdateInput!
    ): TimeRecord
    deleteTimeRecords(input: TimeRecordDeleteInput!): [ID]
  }

  type TimeRecord {
    id: ID!
    amount: Float!
    date: DateTime!
    createdAt: DateTime!
    updatedAt: DateTime
    owner: User!
    activity: Activity!
  }

  type TimeRecordCollection {
    timeRecords: [TimeRecord]
  }

  input TimeRecordCreateInput {
    activityId: ID!
    amount: Float!
    date: DateTime!
  }

  input TimeRecordUpdateInput {
    activityId: ID!
    amount: Float
    date: DateTime
  }

  input TimeRecordDeleteInput {
    timeRecordIds: [ID!]!
  }
`
