import { MosqueBackground } from '@/components/ui/MosqueBackground/MosqueBackground'

import styles from './AuthWrapper.module.scss'
import { AuthForm } from './forms/AuthForm'

interface Props {
  isLogin?: boolean
}

const AuthWrapper = ({ isLogin = false }: Props) => {
  return (
    <MosqueBackground>
      <div className={styles['auth-wrapper']}>
        <AuthForm isLogin={isLogin} />
      </div>
    </MosqueBackground>
  )
}

export default AuthWrapper
