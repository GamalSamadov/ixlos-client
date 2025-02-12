'use client'

import Image from 'next/image'

import { useGetProfileAvatarQuery } from '@/graphql/generated/output'
import Skeleton from '@/shared/ui/skeleton/Skeleton'
import { getFirstLetter } from '@/shared/utils/user/get-first-letter'

import DropDown from './dropdown-menu/DropDownMenu'
import styles from './UserLogo.module.scss'

interface Props {
  width?: number | undefined
  height?: number | undefined
}

const UserLogo = ({ width, height }: Props) => {
  const { data, loading } = useGetProfileAvatarQuery()

  const avatar = data?.getProfile.avatar
  const username = data?.getProfile.username
  const displayName = data?.getProfile.displayName
  const firstLetter = getFirstLetter(displayName)

  return (
    <div className={styles.avatar_container}>
      {loading ? (
        <Skeleton width={width} height={width} />
      ) : (
        <DropDown>
          <div className={styles.avatar} style={{ width, height }}>
            {!avatar && firstLetter ? (
              <h1 className={styles.letter}>{firstLetter}</h1>
            ) : avatar && username ? (
              <Image
                src={avatar}
                width={width && width - 15}
                height={height && height - 15}
                alt={username}
              />
            ) : (
              <Image
                src="/assets/icons/person.svg"
                width={width && width - 15}
                height={height && height - 15}
                alt="User"
                className={styles.person_icon}
              />
            )}
          </div>
        </DropDown>
      )}
    </div>
  )
}

export default UserLogo
