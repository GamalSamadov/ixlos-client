import Image from 'next/image'
import React from 'react'

import { getMediaSource } from '@/shared/utils/get-media-source'
import { getFirstLetter } from '@/shared/utils/user/get-first-letter'

import styles from './Avatar.module.scss'

interface Props {
  size: number
  avatar?: string | null | undefined
  username?: string | undefined
  displayName?: string | undefined
}

export const Avatar = ({ size, avatar, username, displayName }: Props) => {
  const firstLetter = getFirstLetter(displayName)
  return (
    <div className={styles.avatar} style={{ width: size, height: size }}>
      {!avatar && firstLetter ? (
        <h1 className={styles.letter} style={{ fontSize: size - 20 }}>
          {firstLetter}
        </h1>
      ) : avatar && username ? (
        <Image
          src={getMediaSource(avatar)}
          width={size}
          height={size}
          alt={username}
          draggable={false}
        />
      ) : (
        <Image
          src="/assets/icons/person.svg"
          width={size && size - 80}
          height={size && size - 80}
          alt="User"
          className={styles.person_icon}
          draggable={false}
        />
      )}
    </div>
  )
}
