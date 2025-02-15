import Image from 'next/image'
import React from 'react'

import { getFirstLetter } from '@/shared/utils/user/get-first-letter'

import styles from './Avatar.module.scss'

interface Props {
  size: number
  avatar: string | null | undefined
  username: string | undefined
  displayName: string | undefined
}

const Avatar = ({ size, avatar, username, displayName }: Props) => {
  const firstLetter = getFirstLetter(displayName)
  return (
    <div className={styles.avatar} style={{ width: size, height: size }}>
      {!avatar && firstLetter ? (
        <h1 className={styles.letter}>{firstLetter}</h1>
      ) : avatar && username ? (
        <Image
          src={avatar}
          width={size && size - 15}
          height={size && size - 15}
          alt={username}
        />
      ) : (
        <Image
          src="/assets/icons/person.svg"
          width={size && size - 15}
          height={size && size - 15}
          alt="User"
          className={styles.person_icon}
        />
      )}
    </div>
  )
}

export default Avatar
