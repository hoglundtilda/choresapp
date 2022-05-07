// import { gql } from 'apollo-server-core'

// export const choreSchema = gql`
//   extend type Query {
//     choreCollection(userId: ID!): ChoreCollection
//   }

//   extend type Mutation {
//     createChore(userId: ID!, input: ChoreCreateInput!): Chore
//     updateChore(choreId: ID!, input: ChoreUpdateInput!): Chore
//     removeChore(choreId: ID!): ID
//   }

//   type Chore {
//     choreId: ID!
//     label: String!
//     categoryId: String!
//     startDate: DateTime!
//     endDate: DateTime
//     timeRecords: [String!]
//     createdBy: String!
//     archive: Boolean!
//   }

//   type ChoreCollection {
//     chores: [Chore!]
//   }

//   input ChoreCreateInput {
//     categoryId: String!
//     userId: String!
//     label: String!
//     startDate: DateTime!
//   }

//   input ChoreUpdateInput {
//     label: String
//     categoryId: String
//     startDate: DateTime!
//     endDate: DateTime
//     archive: Boolean
//   }
// `

