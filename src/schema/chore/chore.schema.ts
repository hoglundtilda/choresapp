import { gql } from 'apollo-server-core'

export const choreSchema = gql`
  extend type Query {
    choreCollection(userId: ID!): ChoreCollection
  }

  extend type Mutation {
    createChore(userId: ID!, input: ChoreCreateInput!): Chore
    updateChore(choreId: ID!, input: ChoreUpdateInput!): Chore
    removeChore(choreId: ID!): ID
  }

  type Chore {
    id: ID!
    label: String!
    categoryId: ID!
    startDate: DateTime!
    endDate: DateTime
    owner: ID!
    # timeRecords: [String!]
    # archive: Boolean!
  }

  type ChoreCollection {
    owner: ID!
    chores: [Chore]
  }

  input ChoreCreateInput {
    categoryId: ID!
    userId: ID!
    label: String!
    startDate: DateTime!
  }

  input ChoreUpdateInput {
    choreId: ID!
    label: String
    startDate: DateTime!
    endDate: DateTime
    # archive: Boolean
  }
`
