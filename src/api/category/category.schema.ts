import { gql } from 'apollo-server-core'

export const categorySchema = gql`
  extend type Query {
    categoryCollection(userId: ID!): CategoryCollection
    category(categoryId: ID!): Category
  }

  extend type Mutation {
    createCategory(userId: ID!, input: CategoryCreateInput!): Category
    updateCategory(categoryId: ID!, input: CategoryUpdateInput!): Category
    addActivitiesToCategory(input: CategoryAddActivitiesInput!): Category
    removeActivitiesFromCategory(input: CategoryRemoveActivityInput!): Category
    deleteCategories(input: CategoriesDeleteInput!): [ID]
  }

  type Category {
    id: ID!
    name: String!
    owner: User!
    activities: [Activity]
  }

  type CategoryCollection {
    categories: [Category]
  }

  input CategoryCreateInput {
    name: String!
  }

  input CategoryUpdateInput {
    name: String!
  }

  input CategoryAddActivitiesInput {
    activityIds: [ID!]!
    categoryId: ID!
  }

  input CategoryRemoveActivityInput {
    activityIds: [ID!]!
    categoryId: ID!
  }

  input CategoriesDeleteInput {
    categoryIds: [ID!]!
    cascade: Boolean
  }
`

