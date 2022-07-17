import { AuthenticationError, UserInputError } from 'apollo-server-express'
import {
  MutationResolvers,
  QueryResolvers,
  Resolvers
} from '../../_generated/graphql'

export const categoryQueryResolver: QueryResolvers = {
  categoryCollection: async (_, { userId }, ctx) => {
    if (!ctx.user) throw new AuthenticationError('Must be signed in')
    if (!userId) throw new UserInputError('No userId provided', {
      argumentName: 'userId'
    })
    try {
      const categories = await ctx.prisma.category.findMany({
        where: {
          userId: userId
        },
        include: {
          chores: true,
        },
      })
      return { categories }
    } catch (e) {

      throw new Error(e)
    }
  },

  category: async (_, { categoryId }, ctx) => {
    if (!ctx.user) throw new AuthenticationError('Must be signed in')

    try {
      const category = await ctx.prisma.category.findUniqueOrThrow({
        where: {
          id: categoryId
        },
        include: { owner: true, chores: true }
      })
      return category
    } catch (e) {

      throw new Error(e)
    }
  },


}

export const categoryMutationResolver: MutationResolvers = {
  createCategory: async (_, { userId, input }, ctx) => {
    if (!input.title) throw new UserInputError('Title need to be provided')
    try {
      return ctx.prisma.category.create({
        data: {
          title: input.title,
          owner: { connect: { id: userId } }
        }
      })
    } catch (e) {
      throw new Error(e)
    }
  },

  updateCategory: async (_, { categoryId, input }, ctx) => {
    if (!input.title) throw new UserInputError('Title need to be provided')
    try {
      return ctx.prisma.category.update({
        where: { id: categoryId },
        data: { title: input.title }
      })
    } catch (e) {
      throw new Error(e)
    }
  },

  addChoresToCategory: async (_, { categoryId, input }, ctx) => {
    try {
      if (!input?.choreIds?.length) { return null }
      return ctx.prisma.category.update({
        where: { id: categoryId },
        data: {
          chores: { connect: input.choreIds?.map(id => ({ id: id })) || [] }
        }
      })
    } catch (e) {
      throw new Error(e)
    }
  },

  removeChoresFromCategory: async (_, { categoryId, input }, ctx) => {
    try {
      if (!input?.choreIds?.length) { return null }
      return ctx.prisma.category.update({
        where: { id: categoryId },
        data: {
          chores: { disconnect: input.choreIds?.map(id => ({ id: id })) || [] }
        }
      })
    } catch (e) {
      throw new Error(e)
    }
  },

  deleteCategory: async (_, { categoryId }, ctx) => {
    try {
      await ctx.prisma.category.delete({ where: { id: categoryId } })
      return categoryId
    } catch (e) {
      throw new Error(e)
    }
  }
}




export const categoryObjectResolver: Resolvers = {
  Category: {
    id: (parent) => parent.id,
    title: (parent) => parent.title,
    // owner: (parent) => parent.userId
  },

  CategoryCollection: {
    categories: (parent) => parent.categories
  }
}
