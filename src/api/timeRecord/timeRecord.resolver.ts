import { AuthenticationError, UserInputError } from 'apollo-server-express';

import {
  MutationResolvers,
  QueryResolvers,
  Resolvers,
} from '../../_generated/graphql';

export const timeRecordQueryResolver: QueryResolvers = {
  timeRecord: async (_, { timeRecordId }, ctx) => {
    if (!ctx.user) throw new AuthenticationError('Must be signed in');

    try {
      return ctx.prisma.timeRecord.findUniqueOrThrow({
        where: {
          id: timeRecordId,
        },
        include: {
          owner: true,
          activity: true,
        },
      });
    } catch (e) {
      throw new Error(e);
    }
  },
};

export const timeRecordMutationResolver: MutationResolvers = {
  createTimeRecord: async (_, { userId, input }, ctx) => {
    if (!ctx.user) throw new AuthenticationError('Must be signed in');
    if (!userId)
      throw new UserInputError('No userId provided', {
        argumentName: 'userId',
      });
    if (!input.activityId)
      throw new UserInputError('No activity id provided', {
        argumentName: 'activityIds',
      });
    if (!input.amount)
      throw new UserInputError('No input provided', { argumentName: 'amount' });
    // if (!input.date)
    //   throw new UserInputError('No input provided', { argumentName: 'date' })
    // TODO create date here if it is undefined, and update FE
    try {
      return await ctx.prisma.timeRecord.create({
        data: {
          amount: input.amount,
          date: input.date,
          activity: { connect: { id: input.activityId } },
          owner: { connect: { id: userId } },
        },
        include: {
          activity: true,
          owner: true,
        },
      });
    } catch (e) {
      throw new Error(e);
    }
  },

  updateTimeRecord: async (_, { timeRecordId, input }, ctx) => {
    if (!ctx.user) throw new AuthenticationError('Must be signed in');
    if (!timeRecordId)
      throw new UserInputError('No timeRecord id provided', {
        argumentName: 'timeRecordId',
      });

    try {
      return await ctx.prisma.timeRecord.update({
        where: { id: timeRecordId },
        data: {
          amount: input?.amount || undefined,
          date: input?.date || undefined,
          activity: { connect: { id: input?.activityId || undefined } },
        },
        include: {
          activity: true,
          owner: true,
        },
      });
    } catch (e) {
      throw new Error(e);
    }
  },

  deleteTimeRecords: async (_, { input }, ctx) => {
    if (!ctx.user) throw new AuthenticationError('Must be signed in');
    if (!input) throw new UserInputError('No ids provided');

    try {
      await ctx.prisma.timeRecord.deleteMany({
        where: { id: { in: input.timeRecordIds } },
      });
      return input.timeRecordIds;
    } catch (e) {
      throw new Error(e);
    }
  },
};

export const timeRecordObjectResolver: Resolvers = {
  TimeRecord: {
    id: (parent) => parent.id,
    amount: (parent) => parent.amount,
    date: (parent) => parent.date,
    createdAt: (parent) => parent.createdAt,
    updatedAt: (parent) => parent.updatedAt,
    owner: (parent, _, ctx) => {
      return ctx.prisma.user.findUniqueOrThrow({
        where: { id: parent.userId! },
      });
    },
    activity: (parent, _, ctx) => {
      return ctx.prisma.activity.findUniqueOrThrow({
        where: { id: parent.activityId! },
      });
    },
  },
  TimeRecordCollection: {
    timeRecords: (parent) => parent.timeRecords,
  },
};

