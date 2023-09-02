import { AuthenticationError, UserInputError } from 'apollo-server-express'
import {
  MutationResolvers,
  QueryResolvers,
  Resolvers
} from '../../_generated/graphql'

export const categoryQueryResolver: QueryResolvers = {
  categoryCollection: async (_, { userId }, ctx) => {
    console.log('here 1')
    if (!ctx.user) throw new AuthenticationError('Must be signed in')
    if (!userId)
      throw new UserInputError('No userId provided', {
        argumentName: 'userId'
      })
    try {
      const categories = await ctx.prisma.category.findMany({
        where: {
          userId: userId
        },
        include: {
          activities: true
        }
      })
      return { categories }
    } catch (e) {
      throw new Error(e)
    }
  },

  category: async (_, { categoryId }, ctx) => {
    console.log('here 2')
    if (!ctx.user) throw new AuthenticationError('Must be signed in')

    try {
      const category = await ctx.prisma.category.findUniqueOrThrow({
        where: {
          id: categoryId
        },
        include: { owner: true, activities: true }
      })
      return category
    } catch (e) {
      throw new Error(e)
    }
  }
}

export const categoryMutationResolver: MutationResolvers = {
  createCategory: async (_, { userId, input }, ctx) => {
    if (!ctx.user) throw new AuthenticationError('Must be signed in')
    if (!input.name) throw new UserInputError('Name need to be provided')
    try {
      return await ctx.prisma.category.create({
        data: {
          name: input.name,
          owner: { connect: { id: userId } }
        }
      })
    } catch (e) {
      throw new Error(e)
    }
  },

  updateCategory: async (_, { categoryId, input }, ctx) => {
    if (!ctx.user) throw new AuthenticationError('Must be signed in')
    if (!input.name) throw new UserInputError('Name need to be provided')
    try {
      return await ctx.prisma.category.update({
        where: { id: categoryId },
        data: { name: input.name }
      })
    } catch (e) {
      throw new Error(e)
    }
  },

  addActivitiesToCategory: async (_, { input }, ctx) => {
    if (!ctx.user) throw new AuthenticationError('Must be signed in')
    try {
      if (!input?.activityIds?.length) {
        return null
      }
      return ctx.prisma.category.update({
        where: { id: input.categoryId },
        data: {
          activities: {
            connect: input.activityIds?.map((id) => ({ id: id })) || []
          }
        }
      })
    } catch (e) {
      throw new Error(e)
    }
  },

  removeActivitiesFromCategory: async (_, { input }, ctx) => {
    if (!ctx.user) throw new AuthenticationError('Must be signed in')
    try {
      if (!input?.activityIds?.length) {
        return null
      }
      return ctx.prisma.category.update({
        where: { id: input.categoryId },
        data: {
          activities: {
            disconnect: input.activityIds?.map((id) => ({ id: id })) || []
          }
        }
      })
    } catch (e) {
      throw new Error(e)
    }
  },

  deleteCategories: async (_, { input }, ctx) => {
    if (!ctx.user) throw new AuthenticationError('Must be signed in')
    try {
      if (input.cascade) {
        for (const categoryId of input.categoryIds) {
          const activities = await ctx.prisma.activity.findMany({
            where: { categoryId: categoryId }
          })
          for (const activity of activities) {
            await ctx.prisma.timeRecord.deleteMany({
              where: { activityId: activity.id }
            })
          }
          await ctx.prisma.activity.deleteMany({
            where: { categoryId: categoryId }
          })
        }
      }

      await ctx.prisma.category.deleteMany({
        where: { id: { in: input.categoryIds } }
      })
      return input.categoryIds
    } catch (e) {
      throw new Error(e)
    }
  }
}

export const categoryObjectResolver: Resolvers = {
  Category: {
    id: (parent) => parent.id,
    name: (parent) => parent.name,
    owner: (parent, _, ctx) => {
      return ctx.prisma.user.findUniqueOrThrow({
        where: { id: parent.userId! }
      })
    },
    activities: (parent, _, ctx) => {
      return ctx.prisma.activity.findMany({ where: { categoryId: parent.id } })
    }
  },

  CategoryCollection: {
    categories: (parent) => parent.categories
  }
}

