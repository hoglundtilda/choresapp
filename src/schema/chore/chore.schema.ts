import { gql } from 'apollo-server-core'

export const choreSchema = gql`
  extend type Query {
    choreCollection(userId: ID!): ChoreCollection
  }

  extend type Mutation {
    createChore(userId: ID!, input: ChoreCreateInput!): Chore
    updateChore(choreId: ID!, input: ChoreUpdateInput!): Chore
    deleteChores(input: [ID!]!): [ID]
  }

  type Chore {
    id: ID!
    label: String!
    categoryId: ID!
    startDate: DateTime!
    endDate: DateTime
    owner: User
  }

  type ChoreCollection {
    chores: [Chore]
  }

  input ChoreCreateInput {
    categoryId: ID!
    label: String!
    startDate: DateTime!
  }

  input ChoreUpdateInput {
    label: String
    startDate: DateTime!
    endDate: DateTime
    # archive: Boolean
  }
`
