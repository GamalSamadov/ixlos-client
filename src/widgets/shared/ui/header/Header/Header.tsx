import LeftSideBar from '@/entities/shared/ui/leftside-bar/LeftSideBar/LeftSideBar'
import UserLogo from '@/entities/shared/ui/user-logo/UserLogo/UserLogo'

import styles from './Header.module.scss'

const Header = () => {
  return (
    <header className={styles.header}>
      <LeftSideBar />
      <UserLogo width={50} height={50} />
    </header>
  )
}

export default Header
