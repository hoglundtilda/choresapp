import { DateScalar, TimeScalar, DateTimeScalar } from 'graphql-date-scalars';

export const sharedSchemaResolver = {
  Date: DateScalar,
  Time: TimeScalar,
  DateTime: DateTimeScalar,
};
