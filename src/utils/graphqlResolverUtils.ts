import {
  MutationResolvers,
  QueryResolvers,
  Resolvers
} from '../_generated/graphql'

export function asPartialQueryResolver<
  T extends Partial<Required<QueryResolvers>>
>(t: T) {
  return t
}

export function asPartialMutationResolver<T extends Partial<MutationResolvers>>(
  t: T
) {
  return t
}

export function asPartialObjectResolver<T extends Partial<Resolvers>>(t: T) {
  return t
}

