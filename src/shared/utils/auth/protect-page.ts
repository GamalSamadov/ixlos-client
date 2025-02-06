import { notFound, redirect } from 'next/navigation'

import { PUBLIC_PAGES } from '@/shared/config/pages/public.config'
import { Role } from '@/graphql/generated/output'

import { getAuth } from './get-auth'
import { TUserDataState } from '../user/transform-user-to-state'

type RoleCheckFunction = (user: TUserDataState) => boolean

const roleChecks: Partial<Record<Role, RoleCheckFunction>> = {
  [Role.Admin]: (user: TUserDataState) => user.isAdmin,
}

type TRoles = Role[] | Role

export const protectPage = async (roles: TRoles = Role.User) => {
  const rolesArray = Array.isArray(roles) ? roles : [roles]

  const user = await getAuth()

  if (!user) {
    return rolesArray.includes(Role.Admin)
      ? notFound()
      : redirect(PUBLIC_PAGES.LOGIN)
  }

  for (const role of rolesArray) {
    const checkRole = roleChecks[role]
    if (checkRole && !checkRole(user)) {
      return notFound()
    }
  }
}
