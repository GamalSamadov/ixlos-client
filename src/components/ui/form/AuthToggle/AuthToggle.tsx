import { useRouter } from 'next/navigation'

import { PUBLIC_PAGES } from '@/config/pages/public.config'

import styles from './AuthToggle.module.scss'

interface Props {
  isLogin?: boolean
}

export const AuthToggle = ({ isLogin }: Props) => {
  const router = useRouter()
  return (
    <p
      className={styles.auth_toggle}
      onClick={() => {
        router.push(isLogin ? PUBLIC_PAGES.REGISTER : PUBLIC_PAGES.LOGIN)
      }}
    >
      {isLogin ? 'No account? ' : 'Already have an account? '}
    </p>
  )
}
