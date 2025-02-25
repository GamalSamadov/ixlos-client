import type { PropsWithChildren } from 'react'

import { Role } from '@/graphql/generated/output'
import { protectPage } from '@/shared/utils/auth/protect-page'

export default async function TafseerAdminLayout({
  children,
}: PropsWithChildren) {
  await protectPage(Role.Admin)

  return children
}
