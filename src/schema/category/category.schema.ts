import { gql } from 'apollo-server-core'

export const categorySchema = gql`
  extend type Query {
    categoryCollection(userId: ID!): CategoryCollection
  }

  extend type Mutation {
    createCategory(userId: ID!, input: CategoryCreateInput!): Category
    updateCategory(categoryId: ID!, input: CategoryUpdateInput!): Category
    addChoreToCategory(categoryId: ID!, input: CategoryAddChoreInput!): Category
    removeCategory(categoryId: ID!): ID
  }

  type Category {
    id: ID
    title: String
    owner: ID
    chores: [Chore]
  }

  type CategoryCollection {
    categories: [Category]
  }

  input CategoryCreateInput {
    title: String!
    userId: ID!
  }

  input CategoryUpdateInput {
    id: ID!
    title: String!
  }

  input CategoryAddChoreInput {
    choreIds: [String!]
  }
`
