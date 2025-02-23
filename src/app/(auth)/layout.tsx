import { redirect } from 'next/navigation'
import { PropsWithChildren } from 'react'

import { ADMIN_PAGES, PUBLIC_PAGES } from '@/shared/config/pages'
import { MosqueBackground } from '@/shared/ui'
import { getAuth } from '@/shared/utils/auth/get-auth'

import styles from './Auth.module.scss'

const AuthLayout = async ({ children }: PropsWithChildren<unknown>) => {
  const user = await getAuth()

  if (user?.isLoggedIn) {
    return redirect(user.isAdmin ? ADMIN_PAGES.HOME : PUBLIC_PAGES.HOME)
  }

  return (
    <MosqueBackground>
      <div className={styles['auth-wrapper']}>
        <div className={styles.container}>{children}</div>
      </div>
    </MosqueBackground>
  )
}

export default AuthLayout
