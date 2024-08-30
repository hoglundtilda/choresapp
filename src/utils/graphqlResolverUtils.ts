import {
  MutationResolvers,
  QueryResolvers,
  Resolvers,
} from '../_generated/graphql';

//  TODO Understand why this would be prefered to use
//       and why it doesnt work in my case

export function asPartialQueryResolver<
  T extends Partial<Required<QueryResolvers>>,
>(t: T) {
  return t;
}

export function asPartialMutationResolver<T extends Partial<MutationResolvers>>(
  t: T,
) {
  return t;
}

export function asPartialObjectResolver<T extends Partial<Resolvers>>(t: T) {
  return t;
}

