'use client'

import Link from 'next/link'
import { useTranslations } from 'next-intl'

import LeftSideBar from '@/entities/shared/ui/leftside-bar/LeftSideBar/LeftSideBar'
import UserLogo from '@/entities/shared/ui/user-logo/UserLogo/UserLogo'
import { PUBLIC_PAGES } from '@/shared/config/pages/public.config'
import Button from '@/shared/ui/buttons/Button'
import { TUserDataState } from '@/shared/utils/user/transform-user-to-state'

import styles from './Header.module.scss'

interface Props {
  user: TUserDataState | null
}

const Header = ({ user }: Props) => {
  const t = useTranslations()
  return (
    <header className={styles.header}>
      <LeftSideBar />
      {user?.isLoggedIn ? (
        <UserLogo width={50} height={50} />
      ) : (
        <Link href={PUBLIC_PAGES.LOGIN}>
          <Button className="mt-2">{t('auth.login.title')}</Button>
        </Link>
      )}
    </header>
  )
}

export default Header
