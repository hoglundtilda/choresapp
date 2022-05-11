// import { gql } from 'apollo-server-core'

// export const categorySchema = gql`
//   extend type Query {
//     categoryCollection(userId: ID!): CategoryCollection
//   }

//   extend type Mutation {
//     createCategory(userId: ID!, input: CategoryCreateInput!): Category
//     updateCategory(categoryId: ID!, input: CategoryUpdateInput!): Category
//     addChoreToCategory(categoryId: ID!, input: CategoryAddChoreInput!): Category
//     removeCategory(categoryId: ID!): ID
//   }

//   type Category {
//     id: ID!
//     title: String!
//     createdBy: ID!
//     chores: [String!]
//   }

//   type CategoryCollection {
//     userId: ID!
//     categories: [Category]
//   }

//   input CategoryCreateInput {
//     title: String!
//     createdBy: String!
//   }

//   input CategoryUpdateInput {
//     title: String
//   }

//   input CategoryAddChoreInput {
//     choreIds: [String!]
//   }
// `
export { }
