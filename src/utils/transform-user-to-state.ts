import { Role } from '@/graphql/generated/output'
import { TProtectUserData } from '@/types/user/user.types'

export type TUserDataState = {
  id: string
  rights: Role[]
  isLoggedIn: boolean
  isAdmin: boolean
}

export const transformUserToState = (
  user: TProtectUserData
): TUserDataState | null => {
  return {
    ...user,
    isLoggedIn: true,
    isAdmin: user.rights.includes(Role.Admin),
  }
}
