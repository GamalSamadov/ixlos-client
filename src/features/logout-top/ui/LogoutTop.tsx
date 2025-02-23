import Link from 'next/link'
import { useTranslations } from 'next-intl'

import { PUBLIC_PAGES } from '@/shared/config/pages/public.config'
import { Button } from '@/shared/ui'

import styles from './LogoutTop.module.scss'

export const LogoutTop = () => {
  const t = useTranslations()
  return (
    <Link href={PUBLIC_PAGES.LOGIN}>
      <Button className={styles.avatar} variant="link">
        {t('auth.login.title')}
      </Button>
    </Link>
  )
}

export default LogoutTop
