import { AuthenticationError, UserInputError } from 'apollo-server-express';

import {
  MutationResolvers,
  QueryResolvers,
  Resolvers
} from '../../_generated/graphql';

export const activityQueryResolver: QueryResolvers = {
  activityCollection: async (_, { userId }, ctx) => {
    console.log({ userId });
    if (!ctx.user) throw new AuthenticationError('Must be signed in');
    if (!userId)
      throw new UserInputError('No userId provided', {
        argumentName: 'userId'
      });
    try {
      const activities = await ctx.prisma.activity.findMany({
        where: { userId: userId },
        include: {
          owner: true
        }
      });
      console.log({ activities });
      return { activities };
    } catch (e) {
      throw new Error(e);
    }
  },

  activity: async (_, { activityId }, ctx) => {
    if (!ctx.user) throw new AuthenticationError('Must be signed in');

    try {
      return await ctx.prisma.activity.findUniqueOrThrow({
        where: { id: activityId }
      });
    } catch (e) {
      throw new Error(e);
    }
  }
};

export const activityMutationResolver: MutationResolvers = {
  deleteActivities: async (_, { input }, ctx) => {
    if (!ctx.user) throw new AuthenticationError('Must be signed in');
    if (!input.activityIds.length)
      throw new UserInputError('No activity ids provided', {
        argumentName: 'id'
      });

    try {
      const activitiesToDelete = await ctx.prisma.activity.findMany({
        where: { id: { in: input.activityIds } }
      });

      if (input.cascade) {
        for (const activity of activitiesToDelete) {
          await ctx.prisma.timeRecord.deleteMany({
            where: { activityId: activity.id }
          });
        }
      }

      await ctx.prisma.activity.deleteMany({
        where: {
          id: { in: activitiesToDelete.map((activity) => activity.id) }
        }
      });

      return activitiesToDelete.map((activity) => activity.id);
    } catch (e) {
      throw new Error(e);
    }
  },

  updateActivity: async (_, { activityId, input }, ctx) => {
    if (!ctx.user) throw new AuthenticationError('Must be signed in');
    try {
      return await ctx.prisma.activity.update({
        where: { id: activityId },
        data: {
          name: input?.name ?? undefined,
          startDate: input?.startDate ?? undefined,
          endDate: input?.endDate ?? undefined
        }
      });
    } catch (e) {
      throw new Error(e);
    }
  },

  createActivity: async (_, { userId, input }, ctx) => {
    if (!ctx.user) throw new AuthenticationError('Must be signed in');
    if (!input.name)
      throw new UserInputError('Name needs to be provided', {
        argumentName: 'name'
      });
    try {
      const activity = await ctx.prisma.activity.create({
        data: {
          name: input.name,
          owner: { connect: { id: userId } },
          startDate: input.startDate || Date.now()
        }
      });
      if (input.categoryId && activity.id) {
        await ctx.prisma.category.update({
          where: { id: input.categoryId },
          data: { activities: { connect: { id: activity.id } } }
        });
      }

      return activity;
    } catch (e) {
      throw new Error(e);
    }
  }
};

export const activityObjectResolver: Resolvers = {
  Activity: {
    id: (parent) => parent.id,
    name: (parent) => parent.name,
    startDate: (parent) => parent.startDate,
    endDate: (parent) => parent.endDate,
    owner: (parent, _, ctx) => {
      return ctx.prisma.user.findUniqueOrThrow({
        where: { id: parent.userId! }
      });
    },
    category: (parent, _, ctx) => {
      if (!parent.categoryId) return null;
      return ctx.prisma.category.findUnique({
        where: { id: parent?.categoryId }
      });
    },
    timeRecords: (parent, _, ctx) =>
      ctx.prisma.timeRecord.findMany({
        where: { activityId: parent.id },
        include: { activity: true, owner: true }
      }),
    totalTimeTraced: async (parent, _, ctx) => {
      const records = await ctx.prisma.timeRecord.findMany({
        where: { activityId: parent.id },
        include: { activity: true, owner: true }
      });
      return records.reduce((acc, obj) => {
        return acc + obj.amount;
      }, 0);
    }
  },

  ActivityCollection: {
    activities: (parent) => parent.activities
  }
};

