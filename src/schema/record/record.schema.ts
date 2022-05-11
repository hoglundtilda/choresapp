// import { gql } from 'apollo-server-core'

// export const timeRecordSchema = gql`
//   extend type Query {
//     timeRecords(choreId: ID!): TimeRecords
//   }

//   extend type Mutation {
//     createTimeRecord(choreId: ID!, input: TimeRecordCreateInput!): TimeRecord

//     updateTimeRecord(
//       timeRecordId: ID!
//       input: TimeRecordUpdateInput!
//     ): TimeRecord

//     removeTimeRecord(timeRecordId: ID!): ID
//   }

//   type TimeRecord {
//     timeRecordId: ID!
//     noMinutes: Int!
//     choreId: String!
//   }

//   type TimeRecords {
//     choreId: String!
//     timeRecords: [TimeRecord]
//   }

//   # Inputs
//   input TimeRecordCreateInput {
//     noMinutes: Int!
//   }

//   input TimeRecordUpdateInput {
//     noMinutes: Int!
//   }
// `
export { }
