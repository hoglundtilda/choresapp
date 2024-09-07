/* tslint:disable */
import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { User as UserModel, Category as CategoryModel, Activity as ActivityModel, TimeRecord as TimeRecordModel, Streak as StreakModel } from '../../node_modules/.prisma/client';
import { GraphqlContext } from '../types/Context.type';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Date: { input: Date; output: Date; }
  DateTime: { input: Date; output: Date; }
  Time: { input: Date; output: Date; }
};

export type ActivitiesDeleteInput = {
  activityIds: Array<Scalars['ID']['input']>;
  cascade?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Activity = {
  __typename?: 'Activity';
  category: Maybe<Category>;
  createdAt: Scalars['DateTime']['output'];
  endDate: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  owner: User;
  startDate: Scalars['DateTime']['output'];
  timeRecords: Maybe<Array<Maybe<TimeRecord>>>;
  totalTimeTraced: Scalars['Float']['output'];
  updatedAt: Maybe<Scalars['DateTime']['output']>;
};

export type ActivityCollection = {
  __typename?: 'ActivityCollection';
  activities: Maybe<Array<Maybe<Activity>>>;
};

export type ActivityCreateInput = {
  categoryId: Scalars['ID']['input'];
  name: Scalars['String']['input'];
  startDate: Scalars['DateTime']['input'];
};

export type ActivityUpdateInput = {
  endDate?: InputMaybe<Scalars['DateTime']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  startDate: Scalars['DateTime']['input'];
};

export type AuthPayload = {
  __typename?: 'AuthPayload';
  token: Scalars['String']['output'];
  userId: Scalars['ID']['output'];
};

export type CategoriesDeleteInput = {
  cascade?: InputMaybe<Scalars['Boolean']['input']>;
  categoryIds: Array<Scalars['ID']['input']>;
};

export type Category = {
  __typename?: 'Category';
  activities: Maybe<Array<Maybe<Activity>>>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  owner: User;
};

export type CategoryAddActivitiesInput = {
  activityIds: Array<Scalars['ID']['input']>;
  categoryId: Scalars['ID']['input'];
};

export type CategoryCollection = {
  __typename?: 'CategoryCollection';
  categories: Maybe<Array<Maybe<Category>>>;
};

export type CategoryCreateInput = {
  name: Scalars['String']['input'];
};

export type CategoryRemoveActivityInput = {
  activityIds: Array<Scalars['ID']['input']>;
  categoryId: Scalars['ID']['input'];
};

export type CategoryUpdateInput = {
  name: Scalars['String']['input'];
};

export type CreateUserPayload = {
  __typename?: 'CreateUserPayload';
  email: Maybe<Scalars['String']['output']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addActivitiesToCategory: Maybe<Category>;
  createActivity: Maybe<Activity>;
  createCategory: Maybe<Category>;
  createStreak: Maybe<Streak>;
  createTimeRecord: Maybe<TimeRecord>;
  createUser: Maybe<CreateUserPayload>;
  deleteActivities: Maybe<Array<Maybe<Scalars['ID']['output']>>>;
  deleteCategories: Maybe<Array<Maybe<Scalars['ID']['output']>>>;
  deleteStreaks: Maybe<Array<Maybe<Scalars['ID']['output']>>>;
  deleteTimeRecords: Maybe<Array<Maybe<Scalars['ID']['output']>>>;
  removeActivitiesFromCategory: Maybe<Category>;
  updateActivity: Maybe<Activity>;
  updateCategory: Maybe<Category>;
  updateStreak: Maybe<Streak>;
  updateTimeRecord: Maybe<TimeRecord>;
  updateUser: Maybe<User>;
};


export type MutationAddActivitiesToCategoryArgs = {
  input: CategoryAddActivitiesInput;
};


export type MutationCreateActivityArgs = {
  input: ActivityCreateInput;
  userId: Scalars['ID']['input'];
};


export type MutationCreateCategoryArgs = {
  input: CategoryCreateInput;
  userId: Scalars['ID']['input'];
};


export type MutationCreateStreakArgs = {
  input: StreakCreateInput;
  userId: Scalars['ID']['input'];
};


export type MutationCreateTimeRecordArgs = {
  input: TimeRecordCreateInput;
  userId: Scalars['ID']['input'];
};


export type MutationCreateUserArgs = {
  input: UserCreateInput;
};


export type MutationDeleteActivitiesArgs = {
  input: ActivitiesDeleteInput;
};


export type MutationDeleteCategoriesArgs = {
  input: CategoriesDeleteInput;
};


export type MutationDeleteStreaksArgs = {
  input: StrwakDeleteInput;
};


export type MutationDeleteTimeRecordsArgs = {
  input: TimeRecordDeleteInput;
};


export type MutationRemoveActivitiesFromCategoryArgs = {
  input: CategoryRemoveActivityInput;
};


export type MutationUpdateActivityArgs = {
  activityId: Scalars['ID']['input'];
  input: ActivityUpdateInput;
};


export type MutationUpdateCategoryArgs = {
  categoryId: Scalars['ID']['input'];
  input: CategoryUpdateInput;
};


export type MutationUpdateStreakArgs = {
  input: StreakUpdateInput;
  streakId: Scalars['ID']['input'];
};


export type MutationUpdateTimeRecordArgs = {
  input: TimeRecordUpdateInput;
  timeRecordId: Scalars['ID']['input'];
};


export type MutationUpdateUserArgs = {
  input: UserUpdateInput;
  userId: Scalars['ID']['input'];
};

export type Query = {
  __typename?: 'Query';
  activity: Maybe<Activity>;
  activityCollection: Maybe<ActivityCollection>;
  category: Maybe<Category>;
  categoryCollection: Maybe<CategoryCollection>;
  getUser: Maybe<User>;
  loginUser: AuthPayload;
  streak: Maybe<Streak>;
  streakCollection: Maybe<StreakCollection>;
  timeRecord: Maybe<TimeRecord>;
  timeRecordCollection: Maybe<TimeRecordCollection>;
};


export type QueryActivityArgs = {
  activityId: Scalars['ID']['input'];
};


export type QueryActivityCollectionArgs = {
  userId: Scalars['ID']['input'];
};


export type QueryCategoryArgs = {
  categoryId: Scalars['ID']['input'];
};


export type QueryCategoryCollectionArgs = {
  userId: Scalars['ID']['input'];
};


export type QueryGetUserArgs = {
  userId: Scalars['ID']['input'];
};


export type QueryLoginUserArgs = {
  input: UserLoginInput;
};


export type QueryStreakArgs = {
  streakId: Scalars['ID']['input'];
};


export type QueryStreakCollectionArgs = {
  userId: Scalars['ID']['input'];
};


export type QueryTimeRecordArgs = {
  timeRecordId: Scalars['ID']['input'];
};


export type QueryTimeRecordCollectionArgs = {
  activityId: Scalars['ID']['input'];
};

export type Streak = {
  __typename?: 'Streak';
  count: Scalars['Int']['output'];
  endDate: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  owner: User;
  startDate: Maybe<Scalars['DateTime']['output']>;
};

export type StreakCollection = {
  __typename?: 'StreakCollection';
  streaks: Maybe<Array<Maybe<Streak>>>;
};

export type StreakCreateInput = {
  count?: InputMaybe<Scalars['Int']['input']>;
  endDate?: InputMaybe<Scalars['DateTime']['input']>;
  name: Scalars['String']['input'];
  startDate?: InputMaybe<Scalars['DateTime']['input']>;
};

export type StreakUpdateInput = {
  count?: InputMaybe<Scalars['Int']['input']>;
  endDate?: InputMaybe<Scalars['DateTime']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  startDate?: InputMaybe<Scalars['DateTime']['input']>;
};

export type StrwakDeleteInput = {
  streakIds: Array<Scalars['ID']['input']>;
};

export type TimeRecord = {
  __typename?: 'TimeRecord';
  activity: Activity;
  amount: Scalars['Float']['output'];
  createdAt: Scalars['DateTime']['output'];
  date: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  owner: User;
  updatedAt: Maybe<Scalars['DateTime']['output']>;
};

export type TimeRecordCollection = {
  __typename?: 'TimeRecordCollection';
  timeRecords: Maybe<Array<Maybe<TimeRecord>>>;
};

export type TimeRecordCreateInput = {
  activityId: Scalars['ID']['input'];
  amount: Scalars['Float']['input'];
  date: Scalars['DateTime']['input'];
};

export type TimeRecordDeleteInput = {
  timeRecordIds: Array<Scalars['ID']['input']>;
};

export type TimeRecordUpdateInput = {
  activityId: Scalars['ID']['input'];
  amount?: InputMaybe<Scalars['Float']['input']>;
  date?: InputMaybe<Scalars['DateTime']['input']>;
};

export type User = {
  __typename?: 'User';
  createdAt: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type UserCreateInput = {
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type UserLoginInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type UserUpdateInput = {
  name?: InputMaybe<Scalars['String']['input']>;
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
  ActivitiesDeleteInput: ActivitiesDeleteInput;
  Activity: ResolverTypeWrapper<ActivityModel>;
  ActivityCollection: ResolverTypeWrapper<Omit<ActivityCollection, 'activities'> & { activities: Maybe<Array<Maybe<ResolversTypes['Activity']>>> }>;
  ActivityCreateInput: ActivityCreateInput;
  ActivityUpdateInput: ActivityUpdateInput;
  AuthPayload: ResolverTypeWrapper<AuthPayload>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  CategoriesDeleteInput: CategoriesDeleteInput;
  Category: ResolverTypeWrapper<CategoryModel>;
  CategoryAddActivitiesInput: CategoryAddActivitiesInput;
  CategoryCollection: ResolverTypeWrapper<Omit<CategoryCollection, 'categories'> & { categories: Maybe<Array<Maybe<ResolversTypes['Category']>>> }>;
  CategoryCreateInput: CategoryCreateInput;
  CategoryRemoveActivityInput: CategoryRemoveActivityInput;
  CategoryUpdateInput: CategoryUpdateInput;
  CreateUserPayload: ResolverTypeWrapper<CreateUserPayload>;
  Date: ResolverTypeWrapper<Scalars['Date']['output']>;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']['output']>;
  Float: ResolverTypeWrapper<Scalars['Float']['output']>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Mutation: ResolverTypeWrapper<{}>;
  Query: ResolverTypeWrapper<{}>;
  Streak: ResolverTypeWrapper<StreakModel>;
  StreakCollection: ResolverTypeWrapper<Omit<StreakCollection, 'streaks'> & { streaks: Maybe<Array<Maybe<ResolversTypes['Streak']>>> }>;
  StreakCreateInput: StreakCreateInput;
  StreakUpdateInput: StreakUpdateInput;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  StrwakDeleteInput: StrwakDeleteInput;
  Time: ResolverTypeWrapper<Scalars['Time']['output']>;
  TimeRecord: ResolverTypeWrapper<TimeRecordModel>;
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
  ActivitiesDeleteInput: ActivitiesDeleteInput;
  Activity: ActivityModel;
  ActivityCollection: Omit<ActivityCollection, 'activities'> & { activities: Maybe<Array<Maybe<ResolversParentTypes['Activity']>>> };
  ActivityCreateInput: ActivityCreateInput;
  ActivityUpdateInput: ActivityUpdateInput;
  AuthPayload: AuthPayload;
  Boolean: Scalars['Boolean']['output'];
  CategoriesDeleteInput: CategoriesDeleteInput;
  Category: CategoryModel;
  CategoryAddActivitiesInput: CategoryAddActivitiesInput;
  CategoryCollection: Omit<CategoryCollection, 'categories'> & { categories: Maybe<Array<Maybe<ResolversParentTypes['Category']>>> };
  CategoryCreateInput: CategoryCreateInput;
  CategoryRemoveActivityInput: CategoryRemoveActivityInput;
  CategoryUpdateInput: CategoryUpdateInput;
  CreateUserPayload: CreateUserPayload;
  Date: Scalars['Date']['output'];
  DateTime: Scalars['DateTime']['output'];
  Float: Scalars['Float']['output'];
  ID: Scalars['ID']['output'];
  Int: Scalars['Int']['output'];
  Mutation: {};
  Query: {};
  Streak: StreakModel;
  StreakCollection: Omit<StreakCollection, 'streaks'> & { streaks: Maybe<Array<Maybe<ResolversParentTypes['Streak']>>> };
  StreakCreateInput: StreakCreateInput;
  StreakUpdateInput: StreakUpdateInput;
  String: Scalars['String']['output'];
  StrwakDeleteInput: StrwakDeleteInput;
  Time: Scalars['Time']['output'];
  TimeRecord: TimeRecordModel;
  TimeRecordCollection: Omit<TimeRecordCollection, 'timeRecords'> & { timeRecords: Maybe<Array<Maybe<ResolversParentTypes['TimeRecord']>>> };
  TimeRecordCreateInput: TimeRecordCreateInput;
  TimeRecordDeleteInput: TimeRecordDeleteInput;
  TimeRecordUpdateInput: TimeRecordUpdateInput;
  User: UserModel;
  UserCreateInput: UserCreateInput;
  UserLoginInput: UserLoginInput;
  UserUpdateInput: UserUpdateInput;
}>;

export type ActivityResolvers<ContextType = GraphqlContext, ParentType extends ResolversParentTypes['Activity'] = ResolversParentTypes['Activity']> = ResolversObject<{
  category?: Resolver<Maybe<ResolversTypes['Category']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  endDate?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  owner?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  startDate?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  timeRecords?: Resolver<Maybe<Array<Maybe<ResolversTypes['TimeRecord']>>>, ParentType, ContextType>;
  totalTimeTraced?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ActivityCollectionResolvers<ContextType = GraphqlContext, ParentType extends ResolversParentTypes['ActivityCollection'] = ResolversParentTypes['ActivityCollection']> = ResolversObject<{
  activities?: Resolver<Maybe<Array<Maybe<ResolversTypes['Activity']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AuthPayloadResolvers<ContextType = GraphqlContext, ParentType extends ResolversParentTypes['AuthPayload'] = ResolversParentTypes['AuthPayload']> = ResolversObject<{
  token?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CategoryResolvers<ContextType = GraphqlContext, ParentType extends ResolversParentTypes['Category'] = ResolversParentTypes['Category']> = ResolversObject<{
  activities?: Resolver<Maybe<Array<Maybe<ResolversTypes['Activity']>>>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  owner?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CategoryCollectionResolvers<ContextType = GraphqlContext, ParentType extends ResolversParentTypes['CategoryCollection'] = ResolversParentTypes['CategoryCollection']> = ResolversObject<{
  categories?: Resolver<Maybe<Array<Maybe<ResolversTypes['Category']>>>, ParentType, ContextType>;
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
  addActivitiesToCategory?: Resolver<Maybe<ResolversTypes['Category']>, ParentType, ContextType, RequireFields<MutationAddActivitiesToCategoryArgs, 'input'>>;
  createActivity?: Resolver<Maybe<ResolversTypes['Activity']>, ParentType, ContextType, RequireFields<MutationCreateActivityArgs, 'input' | 'userId'>>;
  createCategory?: Resolver<Maybe<ResolversTypes['Category']>, ParentType, ContextType, RequireFields<MutationCreateCategoryArgs, 'input' | 'userId'>>;
  createStreak?: Resolver<Maybe<ResolversTypes['Streak']>, ParentType, ContextType, RequireFields<MutationCreateStreakArgs, 'input' | 'userId'>>;
  createTimeRecord?: Resolver<Maybe<ResolversTypes['TimeRecord']>, ParentType, ContextType, RequireFields<MutationCreateTimeRecordArgs, 'input' | 'userId'>>;
  createUser?: Resolver<Maybe<ResolversTypes['CreateUserPayload']>, ParentType, ContextType, RequireFields<MutationCreateUserArgs, 'input'>>;
  deleteActivities?: Resolver<Maybe<Array<Maybe<ResolversTypes['ID']>>>, ParentType, ContextType, RequireFields<MutationDeleteActivitiesArgs, 'input'>>;
  deleteCategories?: Resolver<Maybe<Array<Maybe<ResolversTypes['ID']>>>, ParentType, ContextType, RequireFields<MutationDeleteCategoriesArgs, 'input'>>;
  deleteStreaks?: Resolver<Maybe<Array<Maybe<ResolversTypes['ID']>>>, ParentType, ContextType, RequireFields<MutationDeleteStreaksArgs, 'input'>>;
  deleteTimeRecords?: Resolver<Maybe<Array<Maybe<ResolversTypes['ID']>>>, ParentType, ContextType, RequireFields<MutationDeleteTimeRecordsArgs, 'input'>>;
  removeActivitiesFromCategory?: Resolver<Maybe<ResolversTypes['Category']>, ParentType, ContextType, RequireFields<MutationRemoveActivitiesFromCategoryArgs, 'input'>>;
  updateActivity?: Resolver<Maybe<ResolversTypes['Activity']>, ParentType, ContextType, RequireFields<MutationUpdateActivityArgs, 'activityId' | 'input'>>;
  updateCategory?: Resolver<Maybe<ResolversTypes['Category']>, ParentType, ContextType, RequireFields<MutationUpdateCategoryArgs, 'categoryId' | 'input'>>;
  updateStreak?: Resolver<Maybe<ResolversTypes['Streak']>, ParentType, ContextType, RequireFields<MutationUpdateStreakArgs, 'input' | 'streakId'>>;
  updateTimeRecord?: Resolver<Maybe<ResolversTypes['TimeRecord']>, ParentType, ContextType, RequireFields<MutationUpdateTimeRecordArgs, 'input' | 'timeRecordId'>>;
  updateUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<MutationUpdateUserArgs, 'input' | 'userId'>>;
}>;

export type QueryResolvers<ContextType = GraphqlContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  activity?: Resolver<Maybe<ResolversTypes['Activity']>, ParentType, ContextType, RequireFields<QueryActivityArgs, 'activityId'>>;
  activityCollection?: Resolver<Maybe<ResolversTypes['ActivityCollection']>, ParentType, ContextType, RequireFields<QueryActivityCollectionArgs, 'userId'>>;
  category?: Resolver<Maybe<ResolversTypes['Category']>, ParentType, ContextType, RequireFields<QueryCategoryArgs, 'categoryId'>>;
  categoryCollection?: Resolver<Maybe<ResolversTypes['CategoryCollection']>, ParentType, ContextType, RequireFields<QueryCategoryCollectionArgs, 'userId'>>;
  getUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryGetUserArgs, 'userId'>>;
  loginUser?: Resolver<ResolversTypes['AuthPayload'], ParentType, ContextType, RequireFields<QueryLoginUserArgs, 'input'>>;
  streak?: Resolver<Maybe<ResolversTypes['Streak']>, ParentType, ContextType, RequireFields<QueryStreakArgs, 'streakId'>>;
  streakCollection?: Resolver<Maybe<ResolversTypes['StreakCollection']>, ParentType, ContextType, RequireFields<QueryStreakCollectionArgs, 'userId'>>;
  timeRecord?: Resolver<Maybe<ResolversTypes['TimeRecord']>, ParentType, ContextType, RequireFields<QueryTimeRecordArgs, 'timeRecordId'>>;
  timeRecordCollection?: Resolver<Maybe<ResolversTypes['TimeRecordCollection']>, ParentType, ContextType, RequireFields<QueryTimeRecordCollectionArgs, 'activityId'>>;
}>;

export type StreakResolvers<ContextType = GraphqlContext, ParentType extends ResolversParentTypes['Streak'] = ResolversParentTypes['Streak']> = ResolversObject<{
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  endDate?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  owner?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  startDate?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type StreakCollectionResolvers<ContextType = GraphqlContext, ParentType extends ResolversParentTypes['StreakCollection'] = ResolversParentTypes['StreakCollection']> = ResolversObject<{
  streaks?: Resolver<Maybe<Array<Maybe<ResolversTypes['Streak']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface TimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Time'], any> {
  name: 'Time';
}

export type TimeRecordResolvers<ContextType = GraphqlContext, ParentType extends ResolversParentTypes['TimeRecord'] = ResolversParentTypes['TimeRecord']> = ResolversObject<{
  activity?: Resolver<ResolversTypes['Activity'], ParentType, ContextType>;
  amount?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
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
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = GraphqlContext> = ResolversObject<{
  Activity?: ActivityResolvers<ContextType>;
  ActivityCollection?: ActivityCollectionResolvers<ContextType>;
  AuthPayload?: AuthPayloadResolvers<ContextType>;
  Category?: CategoryResolvers<ContextType>;
  CategoryCollection?: CategoryCollectionResolvers<ContextType>;
  CreateUserPayload?: CreateUserPayloadResolvers<ContextType>;
  Date?: GraphQLScalarType;
  DateTime?: GraphQLScalarType;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Streak?: StreakResolvers<ContextType>;
  StreakCollection?: StreakCollectionResolvers<ContextType>;
  Time?: GraphQLScalarType;
  TimeRecord?: TimeRecordResolvers<ContextType>;
  TimeRecordCollection?: TimeRecordCollectionResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
}>;

