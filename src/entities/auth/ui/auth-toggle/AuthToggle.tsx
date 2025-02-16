import Link from 'next/link'
import { useTranslations } from 'next-intl'

import { PUBLIC_PAGES } from '@/shared/config/pages/public.config'

import styles from './AuthToggle.module.scss'

interface Props {
  isLogin?: boolean
}

export const AuthToggle = ({ isLogin }: Props) => {
  const t = useTranslations('auth.toggle')
  return (
    <Link
      className={styles.auth_toggle}
      href={isLogin ? PUBLIC_PAGES.REGISTER : PUBLIC_PAGES.LOGIN}
    >
      {isLogin ? t('login') : t('register')}
    </Link>
  )
}
