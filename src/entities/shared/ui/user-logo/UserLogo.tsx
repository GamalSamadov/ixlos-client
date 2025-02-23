import { Dropdown } from '@/features/dropdown/ui'
import { getProfileAvatar } from '@/shared/actions'
import { Avatar, Skeleton } from '@/shared/ui'

import styles from './UserLogo.module.scss'

interface Props {
  size: number
}

export const UserLogo = async ({ size }: Props) => {
  const { id, avatar, username, displayName, loading } =
    await getProfileAvatar()

  return (
    <div className={styles.avatar_container}>
      {loading ? (
        <Skeleton width={size} height={size} />
      ) : (
        <Dropdown id={id}>
          <Avatar
            size={size}
            avatar={avatar}
            username={username}
            displayName={displayName}
          />
        </Dropdown>
      )}
    </div>
  )
}
