import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
};

export type AuthorModel = {
  __typename?: 'AuthorModel';
  country: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  updatedAt: Scalars['DateTime']['output'];
  user: UserModel;
  userId: Scalars['String']['output'];
};

export type AuthorsPaginatedModel = {
  __typename?: 'AuthorsPaginatedModel';
  authors: Array<AuthorModel>;
  hasMore: Scalars['Boolean']['output'];
};

export type AyahModel = {
  __typename?: 'AyahModel';
  arabicText: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  number: Scalars['Float']['output'];
  surah: SurahModel;
  surahId: Scalars['String']['output'];
  tafseers: Array<TafseerAyahModel>;
  updatedAt: Scalars['DateTime']['output'];
  uzbekText: Scalars['String']['output'];
};

export type CreateAuthorInput = {
  bio: Scalars['String']['input'];
  country?: InputMaybe<Scalars['String']['input']>;
  displayName?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type CreateAyahInput = {
  arabicText: Scalars['String']['input'];
  number: Scalars['Float']['input'];
  uzbekText: Scalars['String']['input'];
};

export type CreateSurahInput = {
  arabicName: Scalars['String']['input'];
  name: Scalars['String']['input'];
  number: Scalars['Float']['input'];
  revelationType: SurahRevelationType;
  totalAyahs: Scalars['Float']['input'];
};

export type CreateTafseerAyahInput = {
  text: Scalars['String']['input'];
};

export type CreateTafseerInput = {
  arabicName: Scalars['String']['input'];
  filePath?: InputMaybe<Scalars['String']['input']>;
  language?: InputMaybe<TafseerLanguage>;
  name: Scalars['String']['input'];
  text: Scalars['String']['input'];
};

export type CreateUserInput = {
  bio?: InputMaybe<Scalars['String']['input']>;
  displayName?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type DeviceModel = {
  __typename?: 'DeviceModel';
  browser: Scalars['String']['output'];
  os: Scalars['String']['output'];
  type: Scalars['String']['output'];
};

export type LocationModel = {
  __typename?: 'LocationModel';
  city: Scalars['String']['output'];
  country: Scalars['String']['output'];
  latitude: Scalars['Float']['output'];
  longitude: Scalars['Float']['output'];
};

export type LoginInput = {
  login: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  clearSessionCookie: Scalars['Boolean']['output'];
  createAuthor: Scalars['Boolean']['output'];
  createAyah: Scalars['Boolean']['output'];
  createSurah: Scalars['Boolean']['output'];
  createTafseer: Scalars['Boolean']['output'];
  createTafseerAyah: Scalars['Boolean']['output'];
  createUser: Scalars['Boolean']['output'];
  deleteAuthor: Scalars['Boolean']['output'];
  deleteAyah: Scalars['Boolean']['output'];
  deleteSurah: Scalars['Boolean']['output'];
  deleteTafseer: Scalars['Boolean']['output'];
  deleteTafseerAyah: Scalars['Boolean']['output'];
  loginUser: UserModel;
  logoutUser: Scalars['Boolean']['output'];
  removeSession: Scalars['Boolean']['output'];
  updateAuthor: Scalars['Boolean']['output'];
  updateAyah: Scalars['Boolean']['output'];
  updateSurah: Scalars['Boolean']['output'];
  updateTafseer: Scalars['Boolean']['output'];
  updateTafseerAyah: Scalars['Boolean']['output'];
};


export type MutationCreateAuthorArgs = {
  data: CreateAuthorInput;
};


export type MutationCreateAyahArgs = {
  data: CreateAyahInput;
  surahId: Scalars['String']['input'];
};


export type MutationCreateSurahArgs = {
  data: CreateSurahInput;
};


export type MutationCreateTafseerArgs = {
  authorId: Scalars['String']['input'];
  data: CreateTafseerInput;
};


export type MutationCreateTafseerAyahArgs = {
  ayahId: Scalars['String']['input'];
  data: CreateTafseerAyahInput;
  tafseerId: Scalars['String']['input'];
};


export type MutationCreateUserArgs = {
  data: CreateUserInput;
};


export type MutationDeleteAuthorArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteAyahArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteSurahArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteTafseerArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteTafseerAyahArgs = {
  id: Scalars['String']['input'];
};


export type MutationLoginUserArgs = {
  data: LoginInput;
};


export type MutationRemoveSessionArgs = {
  id: Scalars['String']['input'];
};


export type MutationUpdateAuthorArgs = {
  data: UpdateAuthorInput;
  id: Scalars['String']['input'];
};


export type MutationUpdateAyahArgs = {
  data: UpdateAyahInput;
  id: Scalars['String']['input'];
  surahId: Scalars['String']['input'];
};


export type MutationUpdateSurahArgs = {
  data: UpdateSurahInput;
  id: Scalars['String']['input'];
};


export type MutationUpdateTafseerArgs = {
  authorId: Scalars['String']['input'];
  data: UpdateTafseerInput;
  id: Scalars['String']['input'];
};


export type MutationUpdateTafseerAyahArgs = {
  ayahId: Scalars['String']['input'];
  data: UpdateTafseerAyahInput;
  id: Scalars['String']['input'];
  tafseerId: Scalars['String']['input'];
};

export type PaginationInput = {
  take?: InputMaybe<Scalars['Float']['input']>;
};

export type Query = {
  __typename?: 'Query';
  getAllAuthors: AuthorsPaginatedModel;
  getAllAyahs: Array<AyahModel>;
  getAllSurahs: Array<SurahModel>;
  getAllTafseers: Array<TafseerModel>;
  getAllUsers: Array<UserModel>;
  getAuthorById: AuthorModel;
  getAyahById: AyahModel;
  getCurrentSession: SessionModel;
  getProfile: UserModel;
  getSessionsByUser: Array<SessionModel>;
  getSurahById: SurahModel;
  getTafseerAyahById: TafseerAyahModel;
  getTafseerById: TafseerModel;
  searchAyahByText: Array<AyahModel>;
};


export type QueryGetAllAuthorsArgs = {
  pagination: PaginationInput;
  searchTerm: Scalars['String']['input'];
};


export type QueryGetAllAyahsArgs = {
  pagination: PaginationInput;
  surahId: Scalars['String']['input'];
};


export type QueryGetAllSurahsArgs = {
  pagination: PaginationInput;
};


export type QueryGetAllUsersArgs = {
  pagination: PaginationInput;
};


export type QueryGetAuthorByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryGetAyahByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryGetSurahByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryGetTafseerByIdArgs = {
  id: Scalars['String']['input'];
};


export type QuerySearchAyahByTextArgs = {
  pagination: PaginationInput;
  searchTerm: Scalars['String']['input'];
};

export enum Role {
  Admin = 'ADMIN',
  Author = 'AUTHOR',
  User = 'USER'
}

export type SessionMetadataModel = {
  __typename?: 'SessionMetadataModel';
  device: DeviceModel;
  ip: Scalars['String']['output'];
  location: LocationModel;
};

export type SessionModel = {
  __typename?: 'SessionModel';
  createdAt: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  metadata: SessionMetadataModel;
  rights: Array<Role>;
  userId: Scalars['String']['output'];
};

export type SurahModel = {
  __typename?: 'SurahModel';
  arabicName: Scalars['String']['output'];
  ayahs: Array<AyahModel>;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  number: Scalars['Float']['output'];
  revelationType: SurahRevelationType;
  totalAyahs: Scalars['Float']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export enum SurahRevelationType {
  Meccan = 'MECCAN',
  Medinan = 'MEDINAN'
}

export type TafseerAyahModel = {
  __typename?: 'TafseerAyahModel';
  ayah: AyahModel;
  ayahId: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  tafseer: TafseerModel;
  tafseerId: Scalars['String']['output'];
  text: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export enum TafseerLanguage {
  Arabic = 'ARABIC',
  Uzbek = 'UZBEK'
}

export type TafseerModel = {
  __typename?: 'TafseerModel';
  arabicName: Scalars['String']['output'];
  author: AuthorModel;
  authorId: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  filePath: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  language: TafseerLanguage;
  name: Scalars['String']['output'];
  surahs: Array<SurahModel>;
  text: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type UpdateAuthorInput = {
  bio?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  displayName?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateAyahInput = {
  arabicText?: InputMaybe<Scalars['String']['input']>;
  number?: InputMaybe<Scalars['Float']['input']>;
  uzbekText?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateSurahInput = {
  arabicName?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  number?: InputMaybe<Scalars['Float']['input']>;
  revelationType?: InputMaybe<SurahRevelationType>;
  totalAyahs?: InputMaybe<Scalars['Float']['input']>;
};

export type UpdateTafseerAyahInput = {
  text?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateTafseerInput = {
  arabicName?: InputMaybe<Scalars['String']['input']>;
  filePath?: InputMaybe<Scalars['String']['input']>;
  language?: InputMaybe<TafseerLanguage>;
  name?: InputMaybe<Scalars['String']['input']>;
  text?: InputMaybe<Scalars['String']['input']>;
};

export type UserModel = {
  __typename?: 'UserModel';
  avatar?: Maybe<Scalars['String']['output']>;
  bio?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  displayName: Scalars['String']['output'];
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  password: Scalars['String']['output'];
  rights: Array<Role>;
  updatedAt: Scalars['DateTime']['output'];
  username: Scalars['String']['output'];
};

export type CreateUserMutationVariables = Exact<{
  data: CreateUserInput;
}>;


export type CreateUserMutation = { __typename?: 'Mutation', createUser: boolean };

export type LoginUserMutationVariables = Exact<{
  data: LoginInput;
}>;


export type LoginUserMutation = { __typename?: 'Mutation', loginUser: { __typename?: 'UserModel', email: string } };

export type LogoutUserMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutUserMutation = { __typename?: 'Mutation', logoutUser: boolean };

export type GetCurrentSessionQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCurrentSessionQuery = { __typename?: 'Query', getCurrentSession: { __typename?: 'SessionModel', userId: string, rights: Array<Role> } };

export type GetAllAuthorsQueryVariables = Exact<{
  searchTerm: Scalars['String']['input'];
  pagination: PaginationInput;
}>;


export type GetAllAuthorsQuery = { __typename?: 'Query', getAllAuthors: { __typename?: 'AuthorsPaginatedModel', hasMore: boolean, authors: Array<{ __typename?: 'AuthorModel', country: string, user: { __typename?: 'UserModel', id: string, displayName: string, avatar?: string | null, email: string } }> } };

export type GetProfileQueryVariables = Exact<{ [key: string]: never; }>;


export type GetProfileQuery = { __typename?: 'Query', getProfile: { __typename?: 'UserModel', id: string, email: string, avatar?: string | null, displayName: string, username: string, rights: Array<Role> } };

export type GetProfileAvatarQueryVariables = Exact<{ [key: string]: never; }>;


export type GetProfileAvatarQuery = { __typename?: 'Query', getProfile: { __typename?: 'UserModel', avatar?: string | null, username: string, displayName: string } };


export const CreateUserDocument = gql`
    mutation CreateUser($data: CreateUserInput!) {
  createUser(data: $data)
}
    `;
export type CreateUserMutationFn = Apollo.MutationFunction<CreateUserMutation, CreateUserMutationVariables>;

/**
 * __useCreateUserMutation__
 *
 * To run a mutation, you first call `useCreateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserMutation, { data, loading, error }] = useCreateUserMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateUserMutation(baseOptions?: Apollo.MutationHookOptions<CreateUserMutation, CreateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateUserMutation, CreateUserMutationVariables>(CreateUserDocument, options);
      }
export type CreateUserMutationHookResult = ReturnType<typeof useCreateUserMutation>;
export type CreateUserMutationResult = Apollo.MutationResult<CreateUserMutation>;
export type CreateUserMutationOptions = Apollo.BaseMutationOptions<CreateUserMutation, CreateUserMutationVariables>;
export const LoginUserDocument = gql`
    mutation LoginUser($data: LoginInput!) {
  loginUser(data: $data) {
    email
  }
}
    `;
export type LoginUserMutationFn = Apollo.MutationFunction<LoginUserMutation, LoginUserMutationVariables>;

/**
 * __useLoginUserMutation__
 *
 * To run a mutation, you first call `useLoginUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginUserMutation, { data, loading, error }] = useLoginUserMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useLoginUserMutation(baseOptions?: Apollo.MutationHookOptions<LoginUserMutation, LoginUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginUserMutation, LoginUserMutationVariables>(LoginUserDocument, options);
      }
export type LoginUserMutationHookResult = ReturnType<typeof useLoginUserMutation>;
export type LoginUserMutationResult = Apollo.MutationResult<LoginUserMutation>;
export type LoginUserMutationOptions = Apollo.BaseMutationOptions<LoginUserMutation, LoginUserMutationVariables>;
export const LogoutUserDocument = gql`
    mutation LogoutUser {
  logoutUser
}
    `;
export type LogoutUserMutationFn = Apollo.MutationFunction<LogoutUserMutation, LogoutUserMutationVariables>;

/**
 * __useLogoutUserMutation__
 *
 * To run a mutation, you first call `useLogoutUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutUserMutation, { data, loading, error }] = useLogoutUserMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutUserMutation(baseOptions?: Apollo.MutationHookOptions<LogoutUserMutation, LogoutUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LogoutUserMutation, LogoutUserMutationVariables>(LogoutUserDocument, options);
      }
export type LogoutUserMutationHookResult = ReturnType<typeof useLogoutUserMutation>;
export type LogoutUserMutationResult = Apollo.MutationResult<LogoutUserMutation>;
export type LogoutUserMutationOptions = Apollo.BaseMutationOptions<LogoutUserMutation, LogoutUserMutationVariables>;
export const GetCurrentSessionDocument = gql`
    query GetCurrentSession {
  getCurrentSession {
    userId
    rights
  }
}
    `;

/**
 * __useGetCurrentSessionQuery__
 *
 * To run a query within a React component, call `useGetCurrentSessionQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCurrentSessionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCurrentSessionQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCurrentSessionQuery(baseOptions?: Apollo.QueryHookOptions<GetCurrentSessionQuery, GetCurrentSessionQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCurrentSessionQuery, GetCurrentSessionQueryVariables>(GetCurrentSessionDocument, options);
      }
export function useGetCurrentSessionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCurrentSessionQuery, GetCurrentSessionQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCurrentSessionQuery, GetCurrentSessionQueryVariables>(GetCurrentSessionDocument, options);
        }
export function useGetCurrentSessionSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetCurrentSessionQuery, GetCurrentSessionQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetCurrentSessionQuery, GetCurrentSessionQueryVariables>(GetCurrentSessionDocument, options);
        }
export type GetCurrentSessionQueryHookResult = ReturnType<typeof useGetCurrentSessionQuery>;
export type GetCurrentSessionLazyQueryHookResult = ReturnType<typeof useGetCurrentSessionLazyQuery>;
export type GetCurrentSessionSuspenseQueryHookResult = ReturnType<typeof useGetCurrentSessionSuspenseQuery>;
export type GetCurrentSessionQueryResult = Apollo.QueryResult<GetCurrentSessionQuery, GetCurrentSessionQueryVariables>;
export const GetAllAuthorsDocument = gql`
    query GetAllAuthors($searchTerm: String!, $pagination: PaginationInput!) {
  getAllAuthors(searchTerm: $searchTerm, pagination: $pagination) {
    hasMore
    authors {
      country
      user {
        id
        displayName
        avatar
        email
      }
    }
  }
}
    `;

/**
 * __useGetAllAuthorsQuery__
 *
 * To run a query within a React component, call `useGetAllAuthorsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllAuthorsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllAuthorsQuery({
 *   variables: {
 *      searchTerm: // value for 'searchTerm'
 *      pagination: // value for 'pagination'
 *   },
 * });
 */
export function useGetAllAuthorsQuery(baseOptions: Apollo.QueryHookOptions<GetAllAuthorsQuery, GetAllAuthorsQueryVariables> & ({ variables: GetAllAuthorsQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllAuthorsQuery, GetAllAuthorsQueryVariables>(GetAllAuthorsDocument, options);
      }
export function useGetAllAuthorsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllAuthorsQuery, GetAllAuthorsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllAuthorsQuery, GetAllAuthorsQueryVariables>(GetAllAuthorsDocument, options);
        }
export function useGetAllAuthorsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetAllAuthorsQuery, GetAllAuthorsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllAuthorsQuery, GetAllAuthorsQueryVariables>(GetAllAuthorsDocument, options);
        }
export type GetAllAuthorsQueryHookResult = ReturnType<typeof useGetAllAuthorsQuery>;
export type GetAllAuthorsLazyQueryHookResult = ReturnType<typeof useGetAllAuthorsLazyQuery>;
export type GetAllAuthorsSuspenseQueryHookResult = ReturnType<typeof useGetAllAuthorsSuspenseQuery>;
export type GetAllAuthorsQueryResult = Apollo.QueryResult<GetAllAuthorsQuery, GetAllAuthorsQueryVariables>;
export const GetProfileDocument = gql`
    query GetProfile {
  getProfile {
    id
    email
    avatar
    displayName
    username
    rights
  }
}
    `;

/**
 * __useGetProfileQuery__
 *
 * To run a query within a React component, call `useGetProfileQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProfileQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProfileQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetProfileQuery(baseOptions?: Apollo.QueryHookOptions<GetProfileQuery, GetProfileQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetProfileQuery, GetProfileQueryVariables>(GetProfileDocument, options);
      }
export function useGetProfileLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProfileQuery, GetProfileQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetProfileQuery, GetProfileQueryVariables>(GetProfileDocument, options);
        }
export function useGetProfileSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetProfileQuery, GetProfileQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetProfileQuery, GetProfileQueryVariables>(GetProfileDocument, options);
        }
export type GetProfileQueryHookResult = ReturnType<typeof useGetProfileQuery>;
export type GetProfileLazyQueryHookResult = ReturnType<typeof useGetProfileLazyQuery>;
export type GetProfileSuspenseQueryHookResult = ReturnType<typeof useGetProfileSuspenseQuery>;
export type GetProfileQueryResult = Apollo.QueryResult<GetProfileQuery, GetProfileQueryVariables>;
export const GetProfileAvatarDocument = gql`
    query GetProfileAvatar {
  getProfile {
    avatar
    username
    displayName
  }
}
    `;

/**
 * __useGetProfileAvatarQuery__
 *
 * To run a query within a React component, call `useGetProfileAvatarQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProfileAvatarQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProfileAvatarQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetProfileAvatarQuery(baseOptions?: Apollo.QueryHookOptions<GetProfileAvatarQuery, GetProfileAvatarQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetProfileAvatarQuery, GetProfileAvatarQueryVariables>(GetProfileAvatarDocument, options);
      }
export function useGetProfileAvatarLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProfileAvatarQuery, GetProfileAvatarQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetProfileAvatarQuery, GetProfileAvatarQueryVariables>(GetProfileAvatarDocument, options);
        }
export function useGetProfileAvatarSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetProfileAvatarQuery, GetProfileAvatarQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetProfileAvatarQuery, GetProfileAvatarQueryVariables>(GetProfileAvatarDocument, options);
        }
export type GetProfileAvatarQueryHookResult = ReturnType<typeof useGetProfileAvatarQuery>;
export type GetProfileAvatarLazyQueryHookResult = ReturnType<typeof useGetProfileAvatarLazyQuery>;
export type GetProfileAvatarSuspenseQueryHookResult = ReturnType<typeof useGetProfileAvatarSuspenseQuery>;
export type GetProfileAvatarQueryResult = Apollo.QueryResult<GetProfileAvatarQuery, GetProfileAvatarQueryVariables>;