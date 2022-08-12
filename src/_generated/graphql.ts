/* tslint:disable */
import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { User as UserModel, Category as CategoryModel, Chore as ChoreModel } from '../../node_modules/.prisma/client';
import { GraphqlContext } from '../schema/context';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
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

export type CategoriesDeleteInput = {
  categoryIds: Array<Scalars['ID']>;
};

export type Category = {
  __typename?: 'Category';
  chores: Maybe<Array<Chore>>;
  id: Scalars['ID'];
  owner: User;
  title: Scalars['String'];
};

export type CategoryAddChoreInput = {
  categoryId: Scalars['ID'];
  choreIds: Array<Scalars['ID']>;
};

export type CategoryCollection = {
  __typename?: 'CategoryCollection';
  categories: Maybe<Array<Category>>;
};

export type CategoryCreateInput = {
  title: Scalars['String'];
};

export type CategoryRemoveChoreInput = {
  categoryId: Scalars['ID'];
  choreIds: Array<Scalars['ID']>;
};

export type CategoryUpdateInput = {
  title: Scalars['String'];
};

export type Chore = {
  __typename?: 'Chore';
  category: Maybe<Category>;
  createdAt: Scalars['DateTime'];
  endDate: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  label: Scalars['String'];
  owner: User;
  startDate: Scalars['DateTime'];
  timeRecords: Maybe<Array<Maybe<TimeRecord>>>;
  totalTimeTraced: Scalars['Float'];
  updatedAt: Maybe<Scalars['DateTime']>;
};

export type ChoreCollection = {
  __typename?: 'ChoreCollection';
  chores: Maybe<Array<Maybe<Chore>>>;
};

export type ChoreCreateInput = {
  categoryId: Scalars['ID'];
  label: Scalars['String'];
  startDate: Scalars['DateTime'];
};

export type ChoreUpdateInput = {
  endDate?: InputMaybe<Scalars['DateTime']>;
  label?: InputMaybe<Scalars['String']>;
  startDate: Scalars['DateTime'];
};

export type ChoresDeleteInput = {
  choreIds: Array<Scalars['ID']>;
};

export type CreateUserPayload = {
  __typename?: 'CreateUserPayload';
  email: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addChoresToCategory: Maybe<Category>;
  createCategory: Maybe<Category>;
  createChore: Maybe<Chore>;
  createTimeRecord: Maybe<TimeRecord>;
  createUser: Maybe<CreateUserPayload>;
  deleteCategories: Maybe<Array<Maybe<Scalars['ID']>>>;
  deleteChores: Maybe<Array<Maybe<Scalars['ID']>>>;
  deleteTimeRecords: Maybe<Array<Maybe<Scalars['ID']>>>;
  removeChoresFromCategory: Maybe<Category>;
  updateCategory: Maybe<Category>;
  updateChore: Maybe<Chore>;
  updateTimeRecord: Maybe<TimeRecord>;
  updateUser: Maybe<User>;
};


export type MutationAddChoresToCategoryArgs = {
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


export type MutationCreateTimeRecordArgs = {
  input: TimeRecordCreateInput;
  userId: Scalars['ID'];
};


export type MutationCreateUserArgs = {
  input: UserCreateInput;
};


export type MutationDeleteCategoriesArgs = {
  input: CategoriesDeleteInput;
};


export type MutationDeleteChoresArgs = {
  input: ChoresDeleteInput;
};


export type MutationDeleteTimeRecordsArgs = {
  input: TimeRecordDeleteInput;
};


export type MutationRemoveChoresFromCategoryArgs = {
  input: CategoryRemoveChoreInput;
};


export type MutationUpdateCategoryArgs = {
  categoryId: Scalars['ID'];
  input: CategoryUpdateInput;
};


export type MutationUpdateChoreArgs = {
  choreId: Scalars['ID'];
  input: ChoreUpdateInput;
};


export type MutationUpdateTimeRecordArgs = {
  input: TimeRecordUpdateInput;
  timeRecordId: Scalars['ID'];
};


export type MutationUpdateUserArgs = {
  input: UserUpdateInput;
  userId: Scalars['ID'];
};

export type Query = {
  __typename?: 'Query';
  category: Maybe<Category>;
  categoryCollection: Maybe<CategoryCollection>;
  chore: Maybe<Chore>;
  choreCollection: Maybe<ChoreCollection>;
  getUser: Maybe<User>;
  loginUser: AuthPayload;
  timeRecord: Maybe<TimeRecord>;
  timeRecordCollection: Maybe<TimeRecordCollection>;
};


export type QueryCategoryArgs = {
  categoryId: Scalars['ID'];
};


export type QueryCategoryCollectionArgs = {
  userId: Scalars['ID'];
};


export type QueryChoreArgs = {
  choreId: Scalars['ID'];
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


export type QueryTimeRecordArgs = {
  timeRecordId: Scalars['ID'];
};


export type QueryTimeRecordCollectionArgs = {
  choreId: Scalars['ID'];
};

export type TimeRecord = {
  __typename?: 'TimeRecord';
  amount: Scalars['Float'];
  chore: Chore;
  createdAt: Scalars['DateTime'];
  date: Scalars['DateTime'];
  id: Scalars['ID'];
  owner: User;
  updatedAt: Maybe<Scalars['DateTime']>;
};

export type TimeRecordCollection = {
  __typename?: 'TimeRecordCollection';
  timeRecords: Maybe<Array<Maybe<TimeRecord>>>;
};

export type TimeRecordCreateInput = {
  amount: Scalars['Float'];
  choreId: Scalars['ID'];
  date: Scalars['DateTime'];
};

export type TimeRecordDeleteInput = {
  timeRecordIds: Array<Scalars['ID']>;
};

export type TimeRecordUpdateInput = {
  amount?: InputMaybe<Scalars['Float']>;
  choreId: Scalars['ID'];
  date?: InputMaybe<Scalars['DateTime']>;
};

export type User = {
  __typename?: 'User';
  createdAt: Scalars['DateTime'];
  displayName: Scalars['String'];
  email: Scalars['String'];
  id: Scalars['ID'];
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
  CategoriesDeleteInput: CategoriesDeleteInput;
  Category: ResolverTypeWrapper<CategoryModel>;
  CategoryAddChoreInput: CategoryAddChoreInput;
  CategoryCollection: ResolverTypeWrapper<Omit<CategoryCollection, 'categories'> & { categories: Maybe<Array<ResolversTypes['Category']>> }>;
  CategoryCreateInput: CategoryCreateInput;
  CategoryRemoveChoreInput: CategoryRemoveChoreInput;
  CategoryUpdateInput: CategoryUpdateInput;
  Chore: ResolverTypeWrapper<ChoreModel>;
  ChoreCollection: ResolverTypeWrapper<Omit<ChoreCollection, 'chores'> & { chores: Maybe<Array<Maybe<ResolversTypes['Chore']>>> }>;
  ChoreCreateInput: ChoreCreateInput;
  ChoreUpdateInput: ChoreUpdateInput;
  ChoresDeleteInput: ChoresDeleteInput;
  CreateUserPayload: ResolverTypeWrapper<CreateUserPayload>;
  Date: ResolverTypeWrapper<Scalars['Date']>;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Mutation: ResolverTypeWrapper<{}>;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Time: ResolverTypeWrapper<Scalars['Time']>;
  TimeRecord: ResolverTypeWrapper<Omit<TimeRecord, 'chore' | 'owner'> & { chore: ResolversTypes['Chore'], owner: ResolversTypes['User'] }>;
  TimeRecordCollection: ResolverTypeWrapper<Omit<TimeRecordCollection, 'timeRecords'> & { timeRecords: Maybe<Array<Maybe<ResolversTypes['TimeRecord']>>> }>;
  TimeRecordCreateInput: TimeRecordCreateInput;
  TimeRecordDeleteInput: TimeRecordDeleteInput;
  TimeRecordUpdateInput: TimeRecordUpdateInput;
  User: ResolverTypeWrapper<UserModel>;
  UserCreateInput: UserCreateInput;
  UserLoginInput: UserLoginInput;
  UserUpdateInput: UserUpdateInput;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  AuthPayload: AuthPayload;
  Boolean: Scalars['Boolean'];
  CategoriesDeleteInput: CategoriesDeleteInput;
  Category: CategoryModel;
  CategoryAddChoreInput: CategoryAddChoreInput;
  CategoryCollection: Omit<CategoryCollection, 'categories'> & { categories: Maybe<Array<ResolversParentTypes['Category']>> };
  CategoryCreateInput: CategoryCreateInput;
  CategoryRemoveChoreInput: CategoryRemoveChoreInput;
  CategoryUpdateInput: CategoryUpdateInput;
  Chore: ChoreModel;
  ChoreCollection: Omit<ChoreCollection, 'chores'> & { chores: Maybe<Array<Maybe<ResolversParentTypes['Chore']>>> };
  ChoreCreateInput: ChoreCreateInput;
  ChoreUpdateInput: ChoreUpdateInput;
  ChoresDeleteInput: ChoresDeleteInput;
  CreateUserPayload: CreateUserPayload;
  Date: Scalars['Date'];
  DateTime: Scalars['DateTime'];
  Float: Scalars['Float'];
  ID: Scalars['ID'];
  Mutation: {};
  Query: {};
  String: Scalars['String'];
  Time: Scalars['Time'];
  TimeRecord: Omit<TimeRecord, 'chore' | 'owner'> & { chore: ResolversParentTypes['Chore'], owner: ResolversParentTypes['User'] };
  TimeRecordCollection: Omit<TimeRecordCollection, 'timeRecords'> & { timeRecords: Maybe<Array<Maybe<ResolversParentTypes['TimeRecord']>>> };
  TimeRecordCreateInput: TimeRecordCreateInput;
  TimeRecordDeleteInput: TimeRecordDeleteInput;
  TimeRecordUpdateInput: TimeRecordUpdateInput;
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
  chores?: Resolver<Maybe<Array<ResolversTypes['Chore']>>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  owner?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CategoryCollectionResolvers<ContextType = GraphqlContext, ParentType extends ResolversParentTypes['CategoryCollection'] = ResolversParentTypes['CategoryCollection']> = ResolversObject<{
  categories?: Resolver<Maybe<Array<ResolversTypes['Category']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ChoreResolvers<ContextType = GraphqlContext, ParentType extends ResolversParentTypes['Chore'] = ResolversParentTypes['Chore']> = ResolversObject<{
  category?: Resolver<Maybe<ResolversTypes['Category']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  endDate?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  owner?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  startDate?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  timeRecords?: Resolver<Maybe<Array<Maybe<ResolversTypes['TimeRecord']>>>, ParentType, ContextType>;
  totalTimeTraced?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ChoreCollectionResolvers<ContextType = GraphqlContext, ParentType extends ResolversParentTypes['ChoreCollection'] = ResolversParentTypes['ChoreCollection']> = ResolversObject<{
  chores?: Resolver<Maybe<Array<Maybe<ResolversTypes['Chore']>>>, ParentType, ContextType>;
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
  addChoresToCategory?: Resolver<Maybe<ResolversTypes['Category']>, ParentType, ContextType, RequireFields<MutationAddChoresToCategoryArgs, 'input'>>;
  createCategory?: Resolver<Maybe<ResolversTypes['Category']>, ParentType, ContextType, RequireFields<MutationCreateCategoryArgs, 'input' | 'userId'>>;
  createChore?: Resolver<Maybe<ResolversTypes['Chore']>, ParentType, ContextType, RequireFields<MutationCreateChoreArgs, 'input' | 'userId'>>;
  createTimeRecord?: Resolver<Maybe<ResolversTypes['TimeRecord']>, ParentType, ContextType, RequireFields<MutationCreateTimeRecordArgs, 'input' | 'userId'>>;
  createUser?: Resolver<Maybe<ResolversTypes['CreateUserPayload']>, ParentType, ContextType, RequireFields<MutationCreateUserArgs, 'input'>>;
  deleteCategories?: Resolver<Maybe<Array<Maybe<ResolversTypes['ID']>>>, ParentType, ContextType, RequireFields<MutationDeleteCategoriesArgs, 'input'>>;
  deleteChores?: Resolver<Maybe<Array<Maybe<ResolversTypes['ID']>>>, ParentType, ContextType, RequireFields<MutationDeleteChoresArgs, 'input'>>;
  deleteTimeRecords?: Resolver<Maybe<Array<Maybe<ResolversTypes['ID']>>>, ParentType, ContextType, RequireFields<MutationDeleteTimeRecordsArgs, 'input'>>;
  removeChoresFromCategory?: Resolver<Maybe<ResolversTypes['Category']>, ParentType, ContextType, RequireFields<MutationRemoveChoresFromCategoryArgs, 'input'>>;
  updateCategory?: Resolver<Maybe<ResolversTypes['Category']>, ParentType, ContextType, RequireFields<MutationUpdateCategoryArgs, 'categoryId' | 'input'>>;
  updateChore?: Resolver<Maybe<ResolversTypes['Chore']>, ParentType, ContextType, RequireFields<MutationUpdateChoreArgs, 'choreId' | 'input'>>;
  updateTimeRecord?: Resolver<Maybe<ResolversTypes['TimeRecord']>, ParentType, ContextType, RequireFields<MutationUpdateTimeRecordArgs, 'input' | 'timeRecordId'>>;
  updateUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<MutationUpdateUserArgs, 'input' | 'userId'>>;
}>;

export type QueryResolvers<ContextType = GraphqlContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  category?: Resolver<Maybe<ResolversTypes['Category']>, ParentType, ContextType, RequireFields<QueryCategoryArgs, 'categoryId'>>;
  categoryCollection?: Resolver<Maybe<ResolversTypes['CategoryCollection']>, ParentType, ContextType, RequireFields<QueryCategoryCollectionArgs, 'userId'>>;
  chore?: Resolver<Maybe<ResolversTypes['Chore']>, ParentType, ContextType, RequireFields<QueryChoreArgs, 'choreId'>>;
  choreCollection?: Resolver<Maybe<ResolversTypes['ChoreCollection']>, ParentType, ContextType, RequireFields<QueryChoreCollectionArgs, 'userId'>>;
  getUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryGetUserArgs, 'userId'>>;
  loginUser?: Resolver<ResolversTypes['AuthPayload'], ParentType, ContextType, RequireFields<QueryLoginUserArgs, 'input'>>;
  timeRecord?: Resolver<Maybe<ResolversTypes['TimeRecord']>, ParentType, ContextType, RequireFields<QueryTimeRecordArgs, 'timeRecordId'>>;
  timeRecordCollection?: Resolver<Maybe<ResolversTypes['TimeRecordCollection']>, ParentType, ContextType, RequireFields<QueryTimeRecordCollectionArgs, 'choreId'>>;
}>;

export interface TimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Time'], any> {
  name: 'Time';
}

export type TimeRecordResolvers<ContextType = GraphqlContext, ParentType extends ResolversParentTypes['TimeRecord'] = ResolversParentTypes['TimeRecord']> = ResolversObject<{
  amount?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  chore?: Resolver<ResolversTypes['Chore'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  date?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  owner?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TimeRecordCollectionResolvers<ContextType = GraphqlContext, ParentType extends ResolversParentTypes['TimeRecordCollection'] = ResolversParentTypes['TimeRecordCollection']> = ResolversObject<{
  timeRecords?: Resolver<Maybe<Array<Maybe<ResolversTypes['TimeRecord']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserResolvers<ContextType = GraphqlContext, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = ResolversObject<{
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  displayName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
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
  TimeRecord?: TimeRecordResolvers<ContextType>;
  TimeRecordCollection?: TimeRecordCollectionResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
}>;

