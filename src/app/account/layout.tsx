import { PropsWithChildren } from 'react'

import { MosqueBackground } from '@/components/ui/backgrounds/MosqueBackground/MosqueBackground'

import styles from './Auth.module.scss'

const AuthLayout = ({ children }: PropsWithChildren) => {
  return (
    <MosqueBackground>
      <div className={styles['auth-wrapper']}>{children}</div>
    </MosqueBackground>
  )
}

export default AuthLayout
