import { redirect } from 'next/navigation'
import { PropsWithChildren } from 'react'

import { PUBLIC_PAGES } from '@/shared/config/pages/public.config'
import { getAuth } from '@/shared/utils/auth/get-auth'

const ProfileLayout = async ({ children }: PropsWithChildren) => {
  const user = await getAuth()

  if (!user?.isLoggedIn) {
    return redirect(PUBLIC_PAGES.LOGIN)
  }

  return children
}

export default ProfileLayout
