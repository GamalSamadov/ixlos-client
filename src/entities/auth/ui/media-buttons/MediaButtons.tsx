'use client'

import Link from 'next/link'

import styles from './MediaButtons.module.scss'
import { HrWithTitle } from '../../../shared/ui/from/hr-with-title/HrWithTitle'
import { GoogleButton } from '../google-button/GoogleButton'

interface Props {
  isLoading: boolean
}

export const MediaButtons = ({ isLoading }: Props) => {
  return (
    <Link href="/auth/google" className={styles.media}>
      <HrWithTitle title="Or" />
      <GoogleButton isLoading={isLoading} />
    </Link>
  )
}
