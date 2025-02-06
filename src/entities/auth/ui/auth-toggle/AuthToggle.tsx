import { useRouter } from 'next/navigation'
import { useTranslations } from 'next-intl'

import { PUBLIC_PAGES } from '@/shared/config/pages/public.config'

import styles from './AuthToggle.module.scss'

interface Props {
  isLogin?: boolean
}

export const AuthToggle = ({ isLogin }: Props) => {
  const router = useRouter()
  const t = useTranslations('auth.toggle')
  return (
    <p
      className={styles.auth_toggle}
      onClick={() => {
        router.push(isLogin ? PUBLIC_PAGES.REGISTER : PUBLIC_PAGES.LOGIN)
      }}
    >
      {isLogin ? t('login') : t('register')}
    </p>
  )
}
