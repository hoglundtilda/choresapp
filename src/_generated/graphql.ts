/* tslint:disable */
import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { User as UserModel } from './client/index.d';
import { GraphqlContext } from '../schema/context';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: Date;
  DateTime: Date;
  Time: Date;
};

export type AuthPayload = {
  __typename?: 'AuthPayload';
  token: Scalars['String'];
  userId: Scalars['ID'];
};

export type Category = {
  __typename?: 'Category';
  chores: Maybe<Array<Maybe<Chore>>>;
  id: Maybe<Scalars['ID']>;
  owner: Maybe<Scalars['ID']>;
  title: Maybe<Scalars['String']>;
};

export type CategoryAddChoreInput = {
  choreIds?: InputMaybe<Array<Scalars['String']>>;
};

export type CategoryCollection = {
  __typename?: 'CategoryCollection';
  categories: Maybe<Array<Maybe<Category>>>;
};

export type CategoryCreateInput = {
  title: Scalars['String'];
  userId: Scalars['ID'];
};

export type CategoryUpdateInput = {
  id: Scalars['ID'];
  title: Scalars['String'];
};

export type Chore = {
  __typename?: 'Chore';
  categoryId: Scalars['ID'];
  endDate: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  label: Scalars['String'];
  owner: Scalars['ID'];
  startDate: Scalars['DateTime'];
};

export type ChoreCollection = {
  __typename?: 'ChoreCollection';
  chores: Maybe<Array<Maybe<Chore>>>;
  owner: Scalars['ID'];
};

export type ChoreCreateInput = {
  categoryId: Scalars['ID'];
  label: Scalars['String'];
  startDate: Scalars['DateTime'];
  userId: Scalars['ID'];
};

export type ChoreUpdateInput = {
  choreId: Scalars['ID'];
  endDate?: InputMaybe<Scalars['DateTime']>;
  label?: InputMaybe<Scalars['String']>;
  startDate: Scalars['DateTime'];
};

export type CreateUserPayload = {
  __typename?: 'CreateUserPayload';
  email: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addChoreToCategory: Maybe<Category>;
  createCategory: Maybe<Category>;
  createChore: Maybe<Chore>;
  createUser: Maybe<CreateUserPayload>;
  removeCategory: Maybe<Scalars['ID']>;
  removeChore: Maybe<Scalars['ID']>;
  updateCategory: Maybe<Category>;
  updateChore: Maybe<Chore>;
  updateUser: Maybe<User>;
};


export type MutationAddChoreToCategoryArgs = {
  categoryId: Scalars['ID'];
  input: CategoryAddChoreInput;
};


export type MutationCreateCategoryArgs = {
  input: CategoryCreateInput;
  userId: Scalars['ID'];
};


export type MutationCreateChoreArgs = {
  input: ChoreCreateInput;
  userId: Scalars['ID'];
};


export type MutationCreateUserArgs = {
  input: UserCreateInput;
};


export type MutationRemoveCategoryArgs = {
  categoryId: Scalars['ID'];
};


export type MutationRemoveChoreArgs = {
  choreId: Scalars['ID'];
};


export type MutationUpdateCategoryArgs = {
  categoryId: Scalars['ID'];
  input: CategoryUpdateInput;
};


export type MutationUpdateChoreArgs = {
  choreId: Scalars['ID'];
  input: ChoreUpdateInput;
};


export type MutationUpdateUserArgs = {
  input: UserUpdateInput;
  userId: Scalars['ID'];
};

export type Query = {
  __typename?: 'Query';
  categoryCollection: Maybe<CategoryCollection>;
  choreCollection: Maybe<ChoreCollection>;
  getUser: Maybe<User>;
  loginUser: AuthPayload;
};


export type QueryCategoryCollectionArgs = {
  userId: Scalars['ID'];
};


export type QueryChoreCollectionArgs = {
  userId: Scalars['ID'];
};


export type QueryGetUserArgs = {
  userId: Scalars['ID'];
};


export type QueryLoginUserArgs = {
  input: UserLoginInput;
};

export type User = {
  __typename?: 'User';
  createdAt: Scalars['DateTime'];
  displayName: Scalars['String'];
  email: Scalars['String'];
  userId: Scalars['ID'];
};

export type UserCreateInput = {
  displayName: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
};

export type UserLoginInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type UserUpdateInput = {
  displayName?: InputMaybe<Scalars['String']>;
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  AuthPayload: ResolverTypeWrapper<AuthPayload>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Category: ResolverTypeWrapper<Category>;
  CategoryAddChoreInput: CategoryAddChoreInput;
  CategoryCollection: ResolverTypeWrapper<CategoryCollection>;
  CategoryCreateInput: CategoryCreateInput;
  CategoryUpdateInput: CategoryUpdateInput;
  Chore: ResolverTypeWrapper<Chore>;
  ChoreCollection: ResolverTypeWrapper<ChoreCollection>;
  ChoreCreateInput: ChoreCreateInput;
  ChoreUpdateInput: ChoreUpdateInput;
  CreateUserPayload: ResolverTypeWrapper<CreateUserPayload>;
  Date: ResolverTypeWrapper<Scalars['Date']>;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Mutation: ResolverTypeWrapper<{}>;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Time: ResolverTypeWrapper<Scalars['Time']>;
  User: ResolverTypeWrapper<UserModel>;
  UserCreateInput: UserCreateInput;
  UserLoginInput: UserLoginInput;
  UserUpdateInput: UserUpdateInput;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  AuthPayload: AuthPayload;
  Boolean: Scalars['Boolean'];
  Category: Category;
  CategoryAddChoreInput: CategoryAddChoreInput;
  CategoryCollection: CategoryCollection;
  CategoryCreateInput: CategoryCreateInput;
  CategoryUpdateInput: CategoryUpdateInput;
  Chore: Chore;
  ChoreCollection: ChoreCollection;
  ChoreCreateInput: ChoreCreateInput;
  ChoreUpdateInput: ChoreUpdateInput;
  CreateUserPayload: CreateUserPayload;
  Date: Scalars['Date'];
  DateTime: Scalars['DateTime'];
  ID: Scalars['ID'];
  Mutation: {};
  Query: {};
  String: Scalars['String'];
  Time: Scalars['Time'];
  User: UserModel;
  UserCreateInput: UserCreateInput;
  UserLoginInput: UserLoginInput;
  UserUpdateInput: UserUpdateInput;
}>;

export type AuthPayloadResolvers<ContextType = GraphqlContext, ParentType extends ResolversParentTypes['AuthPayload'] = ResolversParentTypes['AuthPayload']> = ResolversObject<{
  token?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CategoryResolvers<ContextType = GraphqlContext, ParentType extends ResolversParentTypes['Category'] = ResolversParentTypes['Category']> = ResolversObject<{
  chores?: Resolver<Maybe<Array<Maybe<ResolversTypes['Chore']>>>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  owner?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CategoryCollectionResolvers<ContextType = GraphqlContext, ParentType extends ResolversParentTypes['CategoryCollection'] = ResolversParentTypes['CategoryCollection']> = ResolversObject<{
  categories?: Resolver<Maybe<Array<Maybe<ResolversTypes['Category']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ChoreResolvers<ContextType = GraphqlContext, ParentType extends ResolversParentTypes['Chore'] = ResolversParentTypes['Chore']> = ResolversObject<{
  categoryId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  endDate?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  owner?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  startDate?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ChoreCollectionResolvers<ContextType = GraphqlContext, ParentType extends ResolversParentTypes['ChoreCollection'] = ResolversParentTypes['ChoreCollection']> = ResolversObject<{
  chores?: Resolver<Maybe<Array<Maybe<ResolversTypes['Chore']>>>, ParentType, ContextType>;
  owner?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CreateUserPayloadResolvers<ContextType = GraphqlContext, ParentType extends ResolversParentTypes['CreateUserPayload'] = ResolversParentTypes['CreateUserPayload']> = ResolversObject<{
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date';
}

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type MutationResolvers<ContextType = GraphqlContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  addChoreToCategory?: Resolver<Maybe<ResolversTypes['Category']>, ParentType, ContextType, RequireFields<MutationAddChoreToCategoryArgs, 'categoryId' | 'input'>>;
  createCategory?: Resolver<Maybe<ResolversTypes['Category']>, ParentType, ContextType, RequireFields<MutationCreateCategoryArgs, 'input' | 'userId'>>;
  createChore?: Resolver<Maybe<ResolversTypes['Chore']>, ParentType, ContextType, RequireFields<MutationCreateChoreArgs, 'input' | 'userId'>>;
  createUser?: Resolver<Maybe<ResolversTypes['CreateUserPayload']>, ParentType, ContextType, RequireFields<MutationCreateUserArgs, 'input'>>;
  removeCategory?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType, RequireFields<MutationRemoveCategoryArgs, 'categoryId'>>;
  removeChore?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType, RequireFields<MutationRemoveChoreArgs, 'choreId'>>;
  updateCategory?: Resolver<Maybe<ResolversTypes['Category']>, ParentType, ContextType, RequireFields<MutationUpdateCategoryArgs, 'categoryId' | 'input'>>;
  updateChore?: Resolver<Maybe<ResolversTypes['Chore']>, ParentType, ContextType, RequireFields<MutationUpdateChoreArgs, 'choreId' | 'input'>>;
  updateUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<MutationUpdateUserArgs, 'input' | 'userId'>>;
}>;

export type QueryResolvers<ContextType = GraphqlContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  categoryCollection?: Resolver<Maybe<ResolversTypes['CategoryCollection']>, ParentType, ContextType, RequireFields<QueryCategoryCollectionArgs, 'userId'>>;
  choreCollection?: Resolver<Maybe<ResolversTypes['ChoreCollection']>, ParentType, ContextType, RequireFields<QueryChoreCollectionArgs, 'userId'>>;
  getUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryGetUserArgs, 'userId'>>;
  loginUser?: Resolver<ResolversTypes['AuthPayload'], ParentType, ContextType, RequireFields<QueryLoginUserArgs, 'input'>>;
}>;

export interface TimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Time'], any> {
  name: 'Time';
}

export type UserResolvers<ContextType = GraphqlContext, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = ResolversObject<{
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  displayName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = GraphqlContext> = ResolversObject<{
  AuthPayload?: AuthPayloadResolvers<ContextType>;
  Category?: CategoryResolvers<ContextType>;
  CategoryCollection?: CategoryCollectionResolvers<ContextType>;
  Chore?: ChoreResolvers<ContextType>;
  ChoreCollection?: ChoreCollectionResolvers<ContextType>;
  CreateUserPayload?: CreateUserPayloadResolvers<ContextType>;
  Date?: GraphQLScalarType;
  DateTime?: GraphQLScalarType;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Time?: GraphQLScalarType;
  User?: UserResolvers<ContextType>;
}>;

