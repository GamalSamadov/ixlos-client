import getProfileAvatar from '@/shared/actions/get-profile-avatar'
import Avatar from '@/shared/ui/avatar/Avatar'
import Skeleton from '@/shared/ui/skeleton/Skeleton'

import DropDown from './dropdown-menu/DropDownMenu'
import styles from './UserLogo.module.scss'

interface Props {
  size: number
}

const UserLogo = async ({ size }: Props) => {
  const { id, avatar, username, displayName, loading } =
    await getProfileAvatar()

  return (
    <div className={styles.avatar_container}>
      {loading ? (
        <Skeleton width={size} height={size} />
      ) : (
        <DropDown id={id}>
          <Avatar
            size={size}
            avatar={avatar}
            username={username}
            displayName={displayName}
          />
        </DropDown>
      )}
    </div>
  )
}

export default UserLogo
