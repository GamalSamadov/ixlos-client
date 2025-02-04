import { Role, UserModel } from '@/graphql/generated/output'

export type TUserDataState = {
  id: string
  rights: Role[]
  isLoggedIn: boolean
  isAdmin: boolean
}

export const transformUserToState = (
  user: UserModel
): TUserDataState | null => {
  return {
    ...user,
    isLoggedIn: true,
    isAdmin: user.rights.includes(Role.Admin),
  }
}
