import { redirect } from 'next/navigation'
import { PropsWithChildren } from 'react'

import { MosqueBackground } from '@/components/ui/backgrounds/MosqueBackground/MosqueBackground'
import { ADMIN_PAGES } from '@/config/pages/admin.config'
import { PUBLIC_PAGES } from '@/config/pages/public.config'
import { getServerAuth } from '@/utils/server/get-server-auth'

import styles from './Auth.module.scss'

const AuthLayout = async ({ children }: PropsWithChildren<unknown>) => {
  const user = await getServerAuth()

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
