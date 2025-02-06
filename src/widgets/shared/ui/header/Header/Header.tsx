import LeftSideBar from '@/entities/shared/ui/leftside-bar/LeftSideBar/LeftSideBar'
import UserLogo from '@/entities/shared/ui/user-logo/UserLogo/UserLogo'
import { getAuth } from '@/shared/utils/auth/get-auth'

import styles from './Header.module.scss'

const Header = async () => {
  const user = await getAuth()

  return (
    <header className={styles.header}>
      <LeftSideBar />
      {user?.isLoggedIn ? <UserLogo width={50} height={50} /> : 'Login in '}
    </header>
  )
}

export default Header
