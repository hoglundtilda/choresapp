import { gql } from 'apollo-server-core'

export const categorySchema = gql`
  extend type Query {
    categoryCollection(userId: ID!): CategoryCollection
    category(categoryId: ID!): Category
  }

  extend type Mutation {
    createCategory(userId: ID!, input: CategoryCreateInput!): Category
    updateCategory(categoryId: ID!, input: CategoryUpdateInput!): Category
    addChoresToCategory(categoryId: ID!, input: CategoryAddChoreInput!): Category
    removeChoresFromCategory(categoryId: ID!, input: CategoryRemoveChoreInput!): Category
    deleteCategory(categoryId: ID!): ID
  }

  type Category {
    id: ID
    title: String
    owner: User
    chores: [Chore]
  }

  type CategoryCollection {
    categories: [Category]
  }

  input CategoryCreateInput {
    title: String!
  }

  input CategoryUpdateInput {
    title: String!
  }

  input CategoryAddChoreInput {
    choreIds: [String!]
  }

  input CategoryRemoveChoreInput {
    choreIds: [String!]
  }
`
