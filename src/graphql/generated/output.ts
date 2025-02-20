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
  Upload: { input: any; output: any; }
};

export type AuthorModel = {
  __typename?: 'AuthorModel';
  country?: Maybe<Scalars['String']['output']>;
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
  changeProfileAvatarByUserId: Scalars['Boolean']['output'];
  clearSessionCookie: Scalars['Boolean']['output'];
  createAuthor: Scalars['String']['output'];
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
  deleteUserAndLogout: Scalars['Boolean']['output'];
  deleteUserById: UserModel;
  loginUser: UserModel;
  logoutUser: Scalars['Boolean']['output'];
  registerUser: UserModel;
  removeProfileAvatar: Scalars['Boolean']['output'];
  removeProfileAvatarByUserId: Scalars['Boolean']['output'];
  removeSession: Scalars['Boolean']['output'];
  updateAuthor: Scalars['Boolean']['output'];
  updateAyah: Scalars['Boolean']['output'];
  updateBioByUserId: Scalars['Boolean']['output'];
  updatePasswordByUserId: Scalars['Boolean']['output'];
  updateProfileInfoByUserId: Scalars['Boolean']['output'];
  updateSurah: Scalars['Boolean']['output'];
  updateTafseer: Scalars['Boolean']['output'];
  updateTafseerAyah: Scalars['Boolean']['output'];
};


export type MutationChangeProfileAvatarByUserIdArgs = {
  avatar: Scalars['Upload']['input'];
  userId: Scalars['String']['input'];
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


export type MutationDeleteUserByIdArgs = {
  userId: Scalars['String']['input'];
};


export type MutationLoginUserArgs = {
  data: LoginInput;
};


export type MutationRegisterUserArgs = {
  data: CreateUserInput;
};


export type MutationRemoveProfileAvatarByUserIdArgs = {
  userId: Scalars['String']['input'];
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


export type MutationUpdateBioByUserIdArgs = {
  bio: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};


export type MutationUpdatePasswordByUserIdArgs = {
  data: UpdatePasswordInput;
  userId: Scalars['String']['input'];
};


export type MutationUpdateProfileInfoByUserIdArgs = {
  data: UpdateProfileInfoInput;
  userId: Scalars['String']['input'];
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
  getBioByUserId: Scalars['String']['output'];
  getCurrentSession: SessionModel;
  getEmailByEmail: Scalars['String']['output'];
  getProfile: UserModel;
  getProfileById: UserModel;
  getSessionsByUser: Array<SessionModel>;
  getSurahById: SurahModel;
  getTafseerAyahById: TafseerAyahModel;
  getTafseerById: TafseerModel;
  getUsernameByUsername: Scalars['String']['output'];
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


export type QueryGetBioByUserIdArgs = {
  userId: Scalars['String']['input'];
};


export type QueryGetEmailByEmailArgs = {
  email: Scalars['String']['input'];
};


export type QueryGetProfileByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryGetSurahByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryGetTafseerByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryGetUsernameByUsernameArgs = {
  username: Scalars['String']['input'];
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

export type UpdatePasswordInput = {
  newPassword: Scalars['String']['input'];
  newPasswordRepeat: Scalars['String']['input'];
  oldPassword: Scalars['String']['input'];
};

export type UpdateProfileInfoInput = {
  displayName?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  username: Scalars['String']['input'];
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

export type CreateAuthorMutationVariables = Exact<{
  data: CreateAuthorInput;
}>;


export type CreateAuthorMutation = { __typename?: 'Mutation', createAuthor: string };

export type UpdateBioByUserIdMutationVariables = Exact<{
  userId: Scalars['String']['input'];
  bio: Scalars['String']['input'];
}>;


export type UpdateBioByUserIdMutation = { __typename?: 'Mutation', updateBioByUserId: boolean };

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

export type RegisterUserMutationVariables = Exact<{
  data: CreateUserInput;
}>;


export type RegisterUserMutation = { __typename?: 'Mutation', registerUser: { __typename?: 'UserModel', id: string, email: string } };

export type ChangeProfileAvatarMutationVariables = Exact<{
  userId: Scalars['String']['input'];
  avatar: Scalars['Upload']['input'];
}>;


export type ChangeProfileAvatarMutation = { __typename?: 'Mutation', changeProfileAvatarByUserId: boolean };

export type DeleteUserAndLogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type DeleteUserAndLogoutMutation = { __typename?: 'Mutation', deleteUserAndLogout: boolean };

export type DeleteUserByIdMutationVariables = Exact<{
  userId: Scalars['String']['input'];
}>;


export type DeleteUserByIdMutation = { __typename?: 'Mutation', deleteUserById: { __typename?: 'UserModel', id: string, rights: Array<Role> } };

export type RemoveProfileAvatarByUserIdMutationVariables = Exact<{
  userId: Scalars['String']['input'];
}>;


export type RemoveProfileAvatarByUserIdMutation = { __typename?: 'Mutation', removeProfileAvatarByUserId: boolean };

export type UpdatePasswordByUserIdMutationVariables = Exact<{
  userId: Scalars['String']['input'];
  data: UpdatePasswordInput;
}>;


export type UpdatePasswordByUserIdMutation = { __typename?: 'Mutation', updatePasswordByUserId: boolean };

export type UpdateProfileInfoByUserIdMutationVariables = Exact<{
  userId: Scalars['String']['input'];
  data: UpdateProfileInfoInput;
}>;


export type UpdateProfileInfoByUserIdMutation = { __typename?: 'Mutation', updateProfileInfoByUserId: boolean };

export type GetCurrentSessionQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCurrentSessionQuery = { __typename?: 'Query', getCurrentSession: { __typename?: 'SessionModel', userId: string, rights: Array<Role> } };

export type GetAllAuthorsQueryVariables = Exact<{
  searchTerm: Scalars['String']['input'];
  pagination: PaginationInput;
}>;


export type GetAllAuthorsQuery = { __typename?: 'Query', getAllAuthors: { __typename?: 'AuthorsPaginatedModel', hasMore: boolean, authors: Array<{ __typename?: 'AuthorModel', country?: string | null, user: { __typename?: 'UserModel', id: string, displayName: string, avatar?: string | null, email: string } }> } };

export type GetBioByUserIdQueryVariables = Exact<{
  userId: Scalars['String']['input'];
}>;


export type GetBioByUserIdQuery = { __typename?: 'Query', getBioByUserId: string };

export type GetEmailByEmailQueryVariables = Exact<{
  email: Scalars['String']['input'];
}>;


export type GetEmailByEmailQuery = { __typename?: 'Query', getEmailByEmail: string };

export type GetProfileByIdQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type GetProfileByIdQuery = { __typename?: 'Query', getProfileById: { __typename?: 'UserModel', id: string, email: string, avatar?: string | null, displayName: string, username: string, rights: Array<Role>, bio?: string | null } };

export type GetProfilePictureQueryVariables = Exact<{ [key: string]: never; }>;


export type GetProfilePictureQuery = { __typename?: 'Query', getProfile: { __typename?: 'UserModel', id: string, avatar?: string | null, username: string, displayName: string } };

export type GetUsernameByUsernameQueryVariables = Exact<{
  username: Scalars['String']['input'];
}>;


export type GetUsernameByUsernameQuery = { __typename?: 'Query', getUsernameByUsername: string };


export const CreateAuthorDocument = gql`
    mutation CreateAuthor($data: CreateAuthorInput!) {
  createAuthor(data: $data)
}
    `;
export type CreateAuthorMutationFn = Apollo.MutationFunction<CreateAuthorMutation, CreateAuthorMutationVariables>;

/**
 * __useCreateAuthorMutation__
 *
 * To run a mutation, you first call `useCreateAuthorMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateAuthorMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createAuthorMutation, { data, loading, error }] = useCreateAuthorMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateAuthorMutation(baseOptions?: Apollo.MutationHookOptions<CreateAuthorMutation, CreateAuthorMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateAuthorMutation, CreateAuthorMutationVariables>(CreateAuthorDocument, options);
      }
export type CreateAuthorMutationHookResult = ReturnType<typeof useCreateAuthorMutation>;
export type CreateAuthorMutationResult = Apollo.MutationResult<CreateAuthorMutation>;
export type CreateAuthorMutationOptions = Apollo.BaseMutationOptions<CreateAuthorMutation, CreateAuthorMutationVariables>;
export const UpdateBioByUserIdDocument = gql`
    mutation updateBioByUserId($userId: String!, $bio: String!) {
  updateBioByUserId(userId: $userId, bio: $bio)
}
    `;
export type UpdateBioByUserIdMutationFn = Apollo.MutationFunction<UpdateBioByUserIdMutation, UpdateBioByUserIdMutationVariables>;

/**
 * __useUpdateBioByUserIdMutation__
 *
 * To run a mutation, you first call `useUpdateBioByUserIdMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateBioByUserIdMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateBioByUserIdMutation, { data, loading, error }] = useUpdateBioByUserIdMutation({
 *   variables: {
 *      userId: // value for 'userId'
 *      bio: // value for 'bio'
 *   },
 * });
 */
export function useUpdateBioByUserIdMutation(baseOptions?: Apollo.MutationHookOptions<UpdateBioByUserIdMutation, UpdateBioByUserIdMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateBioByUserIdMutation, UpdateBioByUserIdMutationVariables>(UpdateBioByUserIdDocument, options);
      }
export type UpdateBioByUserIdMutationHookResult = ReturnType<typeof useUpdateBioByUserIdMutation>;
export type UpdateBioByUserIdMutationResult = Apollo.MutationResult<UpdateBioByUserIdMutation>;
export type UpdateBioByUserIdMutationOptions = Apollo.BaseMutationOptions<UpdateBioByUserIdMutation, UpdateBioByUserIdMutationVariables>;
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
export const RegisterUserDocument = gql`
    mutation RegisterUser($data: CreateUserInput!) {
  registerUser(data: $data) {
    id
    email
  }
}
    `;
export type RegisterUserMutationFn = Apollo.MutationFunction<RegisterUserMutation, RegisterUserMutationVariables>;

/**
 * __useRegisterUserMutation__
 *
 * To run a mutation, you first call `useRegisterUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerUserMutation, { data, loading, error }] = useRegisterUserMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useRegisterUserMutation(baseOptions?: Apollo.MutationHookOptions<RegisterUserMutation, RegisterUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegisterUserMutation, RegisterUserMutationVariables>(RegisterUserDocument, options);
      }
export type RegisterUserMutationHookResult = ReturnType<typeof useRegisterUserMutation>;
export type RegisterUserMutationResult = Apollo.MutationResult<RegisterUserMutation>;
export type RegisterUserMutationOptions = Apollo.BaseMutationOptions<RegisterUserMutation, RegisterUserMutationVariables>;
export const ChangeProfileAvatarDocument = gql`
    mutation changeProfileAvatar($userId: String!, $avatar: Upload!) {
  changeProfileAvatarByUserId(userId: $userId, avatar: $avatar)
}
    `;
export type ChangeProfileAvatarMutationFn = Apollo.MutationFunction<ChangeProfileAvatarMutation, ChangeProfileAvatarMutationVariables>;

/**
 * __useChangeProfileAvatarMutation__
 *
 * To run a mutation, you first call `useChangeProfileAvatarMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangeProfileAvatarMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changeProfileAvatarMutation, { data, loading, error }] = useChangeProfileAvatarMutation({
 *   variables: {
 *      userId: // value for 'userId'
 *      avatar: // value for 'avatar'
 *   },
 * });
 */
export function useChangeProfileAvatarMutation(baseOptions?: Apollo.MutationHookOptions<ChangeProfileAvatarMutation, ChangeProfileAvatarMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ChangeProfileAvatarMutation, ChangeProfileAvatarMutationVariables>(ChangeProfileAvatarDocument, options);
      }
export type ChangeProfileAvatarMutationHookResult = ReturnType<typeof useChangeProfileAvatarMutation>;
export type ChangeProfileAvatarMutationResult = Apollo.MutationResult<ChangeProfileAvatarMutation>;
export type ChangeProfileAvatarMutationOptions = Apollo.BaseMutationOptions<ChangeProfileAvatarMutation, ChangeProfileAvatarMutationVariables>;
export const DeleteUserAndLogoutDocument = gql`
    mutation DeleteUserAndLogout {
  deleteUserAndLogout
}
    `;
export type DeleteUserAndLogoutMutationFn = Apollo.MutationFunction<DeleteUserAndLogoutMutation, DeleteUserAndLogoutMutationVariables>;

/**
 * __useDeleteUserAndLogoutMutation__
 *
 * To run a mutation, you first call `useDeleteUserAndLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteUserAndLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteUserAndLogoutMutation, { data, loading, error }] = useDeleteUserAndLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useDeleteUserAndLogoutMutation(baseOptions?: Apollo.MutationHookOptions<DeleteUserAndLogoutMutation, DeleteUserAndLogoutMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteUserAndLogoutMutation, DeleteUserAndLogoutMutationVariables>(DeleteUserAndLogoutDocument, options);
      }
export type DeleteUserAndLogoutMutationHookResult = ReturnType<typeof useDeleteUserAndLogoutMutation>;
export type DeleteUserAndLogoutMutationResult = Apollo.MutationResult<DeleteUserAndLogoutMutation>;
export type DeleteUserAndLogoutMutationOptions = Apollo.BaseMutationOptions<DeleteUserAndLogoutMutation, DeleteUserAndLogoutMutationVariables>;
export const DeleteUserByIdDocument = gql`
    mutation deleteUserById($userId: String!) {
  deleteUserById(userId: $userId) {
    id
    rights
  }
}
    `;
export type DeleteUserByIdMutationFn = Apollo.MutationFunction<DeleteUserByIdMutation, DeleteUserByIdMutationVariables>;

/**
 * __useDeleteUserByIdMutation__
 *
 * To run a mutation, you first call `useDeleteUserByIdMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteUserByIdMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteUserByIdMutation, { data, loading, error }] = useDeleteUserByIdMutation({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useDeleteUserByIdMutation(baseOptions?: Apollo.MutationHookOptions<DeleteUserByIdMutation, DeleteUserByIdMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteUserByIdMutation, DeleteUserByIdMutationVariables>(DeleteUserByIdDocument, options);
      }
export type DeleteUserByIdMutationHookResult = ReturnType<typeof useDeleteUserByIdMutation>;
export type DeleteUserByIdMutationResult = Apollo.MutationResult<DeleteUserByIdMutation>;
export type DeleteUserByIdMutationOptions = Apollo.BaseMutationOptions<DeleteUserByIdMutation, DeleteUserByIdMutationVariables>;
export const RemoveProfileAvatarByUserIdDocument = gql`
    mutation removeProfileAvatarByUserId($userId: String!) {
  removeProfileAvatarByUserId(userId: $userId)
}
    `;
export type RemoveProfileAvatarByUserIdMutationFn = Apollo.MutationFunction<RemoveProfileAvatarByUserIdMutation, RemoveProfileAvatarByUserIdMutationVariables>;

/**
 * __useRemoveProfileAvatarByUserIdMutation__
 *
 * To run a mutation, you first call `useRemoveProfileAvatarByUserIdMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveProfileAvatarByUserIdMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeProfileAvatarByUserIdMutation, { data, loading, error }] = useRemoveProfileAvatarByUserIdMutation({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useRemoveProfileAvatarByUserIdMutation(baseOptions?: Apollo.MutationHookOptions<RemoveProfileAvatarByUserIdMutation, RemoveProfileAvatarByUserIdMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RemoveProfileAvatarByUserIdMutation, RemoveProfileAvatarByUserIdMutationVariables>(RemoveProfileAvatarByUserIdDocument, options);
      }
export type RemoveProfileAvatarByUserIdMutationHookResult = ReturnType<typeof useRemoveProfileAvatarByUserIdMutation>;
export type RemoveProfileAvatarByUserIdMutationResult = Apollo.MutationResult<RemoveProfileAvatarByUserIdMutation>;
export type RemoveProfileAvatarByUserIdMutationOptions = Apollo.BaseMutationOptions<RemoveProfileAvatarByUserIdMutation, RemoveProfileAvatarByUserIdMutationVariables>;
export const UpdatePasswordByUserIdDocument = gql`
    mutation updatePasswordByUserId($userId: String!, $data: UpdatePasswordInput!) {
  updatePasswordByUserId(userId: $userId, data: $data)
}
    `;
export type UpdatePasswordByUserIdMutationFn = Apollo.MutationFunction<UpdatePasswordByUserIdMutation, UpdatePasswordByUserIdMutationVariables>;

/**
 * __useUpdatePasswordByUserIdMutation__
 *
 * To run a mutation, you first call `useUpdatePasswordByUserIdMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePasswordByUserIdMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePasswordByUserIdMutation, { data, loading, error }] = useUpdatePasswordByUserIdMutation({
 *   variables: {
 *      userId: // value for 'userId'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdatePasswordByUserIdMutation(baseOptions?: Apollo.MutationHookOptions<UpdatePasswordByUserIdMutation, UpdatePasswordByUserIdMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdatePasswordByUserIdMutation, UpdatePasswordByUserIdMutationVariables>(UpdatePasswordByUserIdDocument, options);
      }
export type UpdatePasswordByUserIdMutationHookResult = ReturnType<typeof useUpdatePasswordByUserIdMutation>;
export type UpdatePasswordByUserIdMutationResult = Apollo.MutationResult<UpdatePasswordByUserIdMutation>;
export type UpdatePasswordByUserIdMutationOptions = Apollo.BaseMutationOptions<UpdatePasswordByUserIdMutation, UpdatePasswordByUserIdMutationVariables>;
export const UpdateProfileInfoByUserIdDocument = gql`
    mutation updateProfileInfoByUserId($userId: String!, $data: UpdateProfileInfoInput!) {
  updateProfileInfoByUserId(userId: $userId, data: $data)
}
    `;
export type UpdateProfileInfoByUserIdMutationFn = Apollo.MutationFunction<UpdateProfileInfoByUserIdMutation, UpdateProfileInfoByUserIdMutationVariables>;

/**
 * __useUpdateProfileInfoByUserIdMutation__
 *
 * To run a mutation, you first call `useUpdateProfileInfoByUserIdMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateProfileInfoByUserIdMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateProfileInfoByUserIdMutation, { data, loading, error }] = useUpdateProfileInfoByUserIdMutation({
 *   variables: {
 *      userId: // value for 'userId'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateProfileInfoByUserIdMutation(baseOptions?: Apollo.MutationHookOptions<UpdateProfileInfoByUserIdMutation, UpdateProfileInfoByUserIdMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateProfileInfoByUserIdMutation, UpdateProfileInfoByUserIdMutationVariables>(UpdateProfileInfoByUserIdDocument, options);
      }
export type UpdateProfileInfoByUserIdMutationHookResult = ReturnType<typeof useUpdateProfileInfoByUserIdMutation>;
export type UpdateProfileInfoByUserIdMutationResult = Apollo.MutationResult<UpdateProfileInfoByUserIdMutation>;
export type UpdateProfileInfoByUserIdMutationOptions = Apollo.BaseMutationOptions<UpdateProfileInfoByUserIdMutation, UpdateProfileInfoByUserIdMutationVariables>;
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
export const GetBioByUserIdDocument = gql`
    query getBioByUserId($userId: String!) {
  getBioByUserId(userId: $userId)
}
    `;

/**
 * __useGetBioByUserIdQuery__
 *
 * To run a query within a React component, call `useGetBioByUserIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBioByUserIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBioByUserIdQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useGetBioByUserIdQuery(baseOptions: Apollo.QueryHookOptions<GetBioByUserIdQuery, GetBioByUserIdQueryVariables> & ({ variables: GetBioByUserIdQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetBioByUserIdQuery, GetBioByUserIdQueryVariables>(GetBioByUserIdDocument, options);
      }
export function useGetBioByUserIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetBioByUserIdQuery, GetBioByUserIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetBioByUserIdQuery, GetBioByUserIdQueryVariables>(GetBioByUserIdDocument, options);
        }
export function useGetBioByUserIdSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetBioByUserIdQuery, GetBioByUserIdQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetBioByUserIdQuery, GetBioByUserIdQueryVariables>(GetBioByUserIdDocument, options);
        }
export type GetBioByUserIdQueryHookResult = ReturnType<typeof useGetBioByUserIdQuery>;
export type GetBioByUserIdLazyQueryHookResult = ReturnType<typeof useGetBioByUserIdLazyQuery>;
export type GetBioByUserIdSuspenseQueryHookResult = ReturnType<typeof useGetBioByUserIdSuspenseQuery>;
export type GetBioByUserIdQueryResult = Apollo.QueryResult<GetBioByUserIdQuery, GetBioByUserIdQueryVariables>;
export const GetEmailByEmailDocument = gql`
    query getEmailByEmail($email: String!) {
  getEmailByEmail(email: $email)
}
    `;

/**
 * __useGetEmailByEmailQuery__
 *
 * To run a query within a React component, call `useGetEmailByEmailQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetEmailByEmailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetEmailByEmailQuery({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useGetEmailByEmailQuery(baseOptions: Apollo.QueryHookOptions<GetEmailByEmailQuery, GetEmailByEmailQueryVariables> & ({ variables: GetEmailByEmailQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetEmailByEmailQuery, GetEmailByEmailQueryVariables>(GetEmailByEmailDocument, options);
      }
export function useGetEmailByEmailLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetEmailByEmailQuery, GetEmailByEmailQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetEmailByEmailQuery, GetEmailByEmailQueryVariables>(GetEmailByEmailDocument, options);
        }
export function useGetEmailByEmailSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetEmailByEmailQuery, GetEmailByEmailQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetEmailByEmailQuery, GetEmailByEmailQueryVariables>(GetEmailByEmailDocument, options);
        }
export type GetEmailByEmailQueryHookResult = ReturnType<typeof useGetEmailByEmailQuery>;
export type GetEmailByEmailLazyQueryHookResult = ReturnType<typeof useGetEmailByEmailLazyQuery>;
export type GetEmailByEmailSuspenseQueryHookResult = ReturnType<typeof useGetEmailByEmailSuspenseQuery>;
export type GetEmailByEmailQueryResult = Apollo.QueryResult<GetEmailByEmailQuery, GetEmailByEmailQueryVariables>;
export const GetProfileByIdDocument = gql`
    query GetProfileById($id: String!) {
  getProfileById(id: $id) {
    id
    email
    avatar
    displayName
    username
    rights
    bio
  }
}
    `;

/**
 * __useGetProfileByIdQuery__
 *
 * To run a query within a React component, call `useGetProfileByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProfileByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProfileByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetProfileByIdQuery(baseOptions: Apollo.QueryHookOptions<GetProfileByIdQuery, GetProfileByIdQueryVariables> & ({ variables: GetProfileByIdQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetProfileByIdQuery, GetProfileByIdQueryVariables>(GetProfileByIdDocument, options);
      }
export function useGetProfileByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProfileByIdQuery, GetProfileByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetProfileByIdQuery, GetProfileByIdQueryVariables>(GetProfileByIdDocument, options);
        }
export function useGetProfileByIdSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetProfileByIdQuery, GetProfileByIdQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetProfileByIdQuery, GetProfileByIdQueryVariables>(GetProfileByIdDocument, options);
        }
export type GetProfileByIdQueryHookResult = ReturnType<typeof useGetProfileByIdQuery>;
export type GetProfileByIdLazyQueryHookResult = ReturnType<typeof useGetProfileByIdLazyQuery>;
export type GetProfileByIdSuspenseQueryHookResult = ReturnType<typeof useGetProfileByIdSuspenseQuery>;
export type GetProfileByIdQueryResult = Apollo.QueryResult<GetProfileByIdQuery, GetProfileByIdQueryVariables>;
export const GetProfilePictureDocument = gql`
    query GetProfilePicture {
  getProfile {
    id
    avatar
    username
    displayName
  }
}
    `;

/**
 * __useGetProfilePictureQuery__
 *
 * To run a query within a React component, call `useGetProfilePictureQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProfilePictureQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProfilePictureQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetProfilePictureQuery(baseOptions?: Apollo.QueryHookOptions<GetProfilePictureQuery, GetProfilePictureQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetProfilePictureQuery, GetProfilePictureQueryVariables>(GetProfilePictureDocument, options);
      }
export function useGetProfilePictureLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProfilePictureQuery, GetProfilePictureQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetProfilePictureQuery, GetProfilePictureQueryVariables>(GetProfilePictureDocument, options);
        }
export function useGetProfilePictureSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetProfilePictureQuery, GetProfilePictureQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetProfilePictureQuery, GetProfilePictureQueryVariables>(GetProfilePictureDocument, options);
        }
export type GetProfilePictureQueryHookResult = ReturnType<typeof useGetProfilePictureQuery>;
export type GetProfilePictureLazyQueryHookResult = ReturnType<typeof useGetProfilePictureLazyQuery>;
export type GetProfilePictureSuspenseQueryHookResult = ReturnType<typeof useGetProfilePictureSuspenseQuery>;
export type GetProfilePictureQueryResult = Apollo.QueryResult<GetProfilePictureQuery, GetProfilePictureQueryVariables>;
export const GetUsernameByUsernameDocument = gql`
    query getUsernameByUsername($username: String!) {
  getUsernameByUsername(username: $username)
}
    `;

/**
 * __useGetUsernameByUsernameQuery__
 *
 * To run a query within a React component, call `useGetUsernameByUsernameQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUsernameByUsernameQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUsernameByUsernameQuery({
 *   variables: {
 *      username: // value for 'username'
 *   },
 * });
 */
export function useGetUsernameByUsernameQuery(baseOptions: Apollo.QueryHookOptions<GetUsernameByUsernameQuery, GetUsernameByUsernameQueryVariables> & ({ variables: GetUsernameByUsernameQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUsernameByUsernameQuery, GetUsernameByUsernameQueryVariables>(GetUsernameByUsernameDocument, options);
      }
export function useGetUsernameByUsernameLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUsernameByUsernameQuery, GetUsernameByUsernameQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUsernameByUsernameQuery, GetUsernameByUsernameQueryVariables>(GetUsernameByUsernameDocument, options);
        }
export function useGetUsernameByUsernameSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetUsernameByUsernameQuery, GetUsernameByUsernameQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetUsernameByUsernameQuery, GetUsernameByUsernameQueryVariables>(GetUsernameByUsernameDocument, options);
        }
export type GetUsernameByUsernameQueryHookResult = ReturnType<typeof useGetUsernameByUsernameQuery>;
export type GetUsernameByUsernameLazyQueryHookResult = ReturnType<typeof useGetUsernameByUsernameLazyQuery>;
export type GetUsernameByUsernameSuspenseQueryHookResult = ReturnType<typeof useGetUsernameByUsernameSuspenseQuery>;
export type GetUsernameByUsernameQueryResult = Apollo.QueryResult<GetUsernameByUsernameQuery, GetUsernameByUsernameQueryVariables>;