import { gql } from 'apollo-server-core'

export const streakSchema = gql`
  extend type Query {
    streakCollection(userId: ID!): StreakCollection
    streak(streakId: ID!): Streak
  }

  extend type Mutation {
    createStreak(userId: ID!, input: StreakCreateInput!): Streak
    updateStreak(streakId: ID!, input: StreakUpdateInput!): Streak
    deleteStreaks(input: StrwakDeleteInput!): [ID]
  }

  type Streak {
    id: ID!
    startDate: DateTime
    endDate: DateTime
    name: String!
    count: Int!
    owner: User!
  }

  type StreakCollection {
    streaks: [Streak]
  }

  input StreakCreateInput {
    startDate: DateTime
    endDate: DateTime
    name: String!
    count: Int
  }

  input StreakUpdateInput {
    startDate: DateTime
    endDate: DateTime
    name: String
    count: Int
  }

  input StrwakDeleteInput {
    streakIds: [ID!]!
  }
`

