import { UserLogo } from '@/entities/shared/ui'
import { Aside } from '@/features/aside'
import { LogoutTop } from '@/features/logout-top/ui'
import { MEMBER_LINKS, USER_LINKS, ADMIN_LINKS } from '@/shared/data'
import { getAuth } from '@/shared/utils/auth/get-auth'

import styles from './Header.module.scss'

export const Header = async () => {
  const user = await getAuth()
  return (
    <header className={styles.header}>
      {user?.isLoggedIn ? <UserLogo size={50} /> : <LogoutTop />}
      <Aside
        links={
          !user?.isLoggedIn
            ? MEMBER_LINKS
            : user?.isAdmin
              ? ADMIN_LINKS
              : USER_LINKS
        }
      />
    </header>
  )
}
