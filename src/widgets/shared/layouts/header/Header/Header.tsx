import LeftSideBar from '@/entities/shared/components/leftside-bar/LeftSideBar/LeftSideBar'
import UserLogo from '@/entities/shared/components/user-logo/UserLogo/UserLogo'

import styles from './Header.module.scss'

const Header = () => {
  return (
    <header className={styles.header}>
      <LeftSideBar />
      <UserLogo />
    </header>
  )
}

export default Header
