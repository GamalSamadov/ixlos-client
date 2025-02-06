'use client'

import Image from 'next/image'

import { useFindProfileAvatarQuery } from '@/graphql/generated/output'
import Skeleton from '@/shared/ui/skeleton/Skeleton'
import { getFirstLetter } from '@/shared/utils/user/get-first-letter'

import styles from './UserLogo.module.scss'

interface Props {
  width?: number | undefined
  height?: number | undefined
}

const UserLogo = ({ width, height }: Props) => {
  const { data, loading } = useFindProfileAvatarQuery()

  const avatar = data?.findProfile.avatar
  const username = data?.findProfile.username
  const displayName = data?.findProfile.displayName
  const firstLetter = getFirstLetter(displayName)

  return (
    <div className={styles.avatar_container}>
      {loading ? (
        <Skeleton width={width} height={width} />
      ) : (
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
      )}
    </div>
  )
}

export default UserLogo
