import Link from 'next/link'
import { useTranslations } from 'next-intl'

import { PUBLIC_PAGES } from '@/shared/config/pages/public.config'
import Button from '@/shared/ui/buttons/Button'

import styles from './LogoutTop.module.scss'

const LogoutTop = () => {
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
