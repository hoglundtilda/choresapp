import { gql } from 'apollo-server-core'

export const userSchema = gql`
   type Query {
    getUser(userId: ID!): User
    loginUser(input: UserLoginInput!): AuthPayload!
  }

   type Mutation {
    createUser(input: UserCreateInput!): CreateUserPayload
    updateUser(userId: ID!, input: UserUpdateInput!): User
  }

  type User {
    userId: ID!
    createdAt: DateTime!
    email: String!
    displayName: String!
    # googleId: String!
  }

  type CreateUserPayload {
    email: String
  }

  type AuthPayload {
    token: String!
    userId: ID!
  }

  input UserLoginInput {
    email: String!
    password: String!
  }

  input UserCreateInput {
    displayName: String!
    email: String!
    password: String!
  }

  input UserUpdateInput {
    displayName: String
  }
`
