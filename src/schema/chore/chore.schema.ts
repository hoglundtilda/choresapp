import { gql } from 'apollo-server-core'

export const choreSchema = gql`
  extend type Query {
    choreCollection(userId: ID!): ChoreCollection
    chore(choreId: ID!): Chore
  }

  extend type Mutation {
    createChore(userId: ID!, input: ChoreCreateInput!): Chore
    updateChore(choreId: ID!, input: ChoreUpdateInput!): Chore
    deleteChores(input: ChoresDeleteInput!): [ID]
  }

  type Chore {
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
  }

  input ChoresDeleteInput {
    choreIds: [ID!]!
  }
`
