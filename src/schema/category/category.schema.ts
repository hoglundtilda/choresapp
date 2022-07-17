import { gql } from 'apollo-server-core'

export const categorySchema = gql`
  extend type Query {
    categoryCollection(userId: ID!): CategoryCollection
    category(categoryId: ID!): Category
  }

  extend type Mutation {
    createCategory(userId: ID!, input: CategoryCreateInput!): Category
    updateCategory(categoryId: ID!, input: CategoryUpdateInput!): Category
    addChoresToCategory(input: CategoryAddChoreInput!): Category
    removeChoresFromCategory(input: CategoryRemoveChoreInput!): Category
    deleteCategories(input: CategoriesDeleteInput!): [ID]
  }

  type Category {
    id: ID!
    title: String!
    owner: User!
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
    choreIds: [ID!]!
    categoryId: ID!
  }

  input CategoryRemoveChoreInput {
    choreIds: [ID!]!
    categoryId: ID!
  }

  input CategoriesDeleteInput {
    categoryIds: [ID!]!
  }
`
