import { gql } from 'apollo-server-core'

export const timeRecordSchema = gql`
  extend type Query {
    timeRecord(timeRecordId: ID!): TimeRecord
    timeRecordCollection(choreId: ID!): TimeRecordCollection
  }

  extend type Mutation {
    createTimeRecord(choreId: ID!, input: TimeRecordCreateInput!): TimeRecord
    updateTimeRecord(
      timeRecordId: ID!
      input: TimeRecordUpdateInput!
    ): TimeRecord

    removeTimeRecord(timeRecordId: ID!): TimeRecord
  }

  type TimeRecord {
    id: ID!
    amount: Float!
    date: DateTime!
    createdAt: DateTime!
    updatedAt: DateTime
    owner: User!
    chore: Chore!
  }

  type TimeRecordCollection {
    timeRecords: [TimeRecord]
  }

  input TimeRecordCreateInput {
    amount: Float!
    date: DateTime!
  }

  input TimeRecordUpdateInput {
    amount: Float
    data: DateTime
  }
`
