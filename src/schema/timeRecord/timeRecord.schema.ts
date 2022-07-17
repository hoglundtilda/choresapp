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
    createdAt: DateTime!
    updatedAt: DateTime
    owner: User!
    chore: Chore!
  }

  type TimeRecordCollection {
    timeRecords: [TimeRecord]
  }

  # Inputs
  input TimeRecordCreateInput {
    amount: Float!
  }

  input TimeRecordUpdateInput {
    amount: Float!
  }
`
