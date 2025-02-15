import LeftSideBar from '@/entities/shared/ui/leftside-bar/LeftSideBar/LeftSideBar'
import LogoutTop from '@/entities/shared/ui/logout-top/LogoutTop'
import UserLogo from '@/entities/shared/ui/user-logo/UserLogo/UserLogo'
import { ADMIN_LINKS } from '@/shared/data/leftside/admin-links.data'
import { MEMBER_LINKS } from '@/shared/data/leftside/member-links.data'
import { USER_LINKS } from '@/shared/data/leftside/user-links.data'
import { getAuth } from '@/shared/utils/auth/get-auth'

import styles from './Header.module.scss'

const Header = async () => {
  const user = await getAuth()
  return (
    <header className={styles.header}>
      {user?.isLoggedIn ? <UserLogo size={50} /> : <LogoutTop />}
      <LeftSideBar
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

export default Header
