import { gql } from 'apollo-server-core'

export const userSchema = gql`
  extend type Query {
    user(userId: ID!): User
  }

  extend type Mutation {
    createUser(input: UserCreateInput!): User
    updateUser(userId: ID!, input: UserUpdateInput!): User
  }

  type User {
    userId: ID!
    email: String!
    displayName: String!
    # password: String!
  }

  input UserCreateInput {
    displayName: String!
    email: String!
    # password: String!
  }

  input UserUpdateInput {
    displayName: String
  }
`
