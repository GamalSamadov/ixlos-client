'use client'

import { useRouter } from 'next/navigation'

import styles from './MediaButtons.module.scss'
import { GoogleButton } from '../google-button/GoogleButton'
import { HrWithTitle } from '../hr-with-title/HrWithTitle'

interface Props {
  isLoading: boolean
}

export const MediaButtons = ({ isLoading }: Props) => {
  const router = useRouter()

  return (
    <div className={styles.media} onClick={() => router.push('/auth/google')}>
      <HrWithTitle title="Or" />
      <GoogleButton isLoading={isLoading} />
    </div>
  )
}
