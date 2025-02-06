import { redirect } from 'next/navigation'
import { PropsWithChildren } from 'react'

import { ADMIN_PAGES } from '@/shared/config/pages/admin.config'
import { PUBLIC_PAGES } from '@/shared/config/pages/public.config'
import { MosqueBackground } from '@/shared/ui/backgrounds/mosque-background/MosqueBackground'
import { getAuth } from '@/shared/utils/auth/get-auth'

import styles from './Auth.module.scss'

const AuthLayout = async ({ children }: PropsWithChildren<unknown>) => {
  const user = await getAuth()

  if (user?.isLoggedIn) {
    return redirect(user.isAdmin ? ADMIN_PAGES.HOME : PUBLIC_PAGES.HOME)
  }

  return (
    <MosqueBackground>
      <div className={styles['auth-wrapper']}>{children}</div>
    </MosqueBackground>
  )
}

export default AuthLayout
