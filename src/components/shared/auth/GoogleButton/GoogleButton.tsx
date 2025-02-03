'use client'

import Image from 'next/image'

import { AnimateDownOnClickLeft } from '@/components/ui/buttons/AnimateDownOnClick/AnimateDownOnClick'

import styles from './GoogleButton.module.scss'

interface Props {
  isLoading: boolean
}

export const GoogleButton = ({ isLoading }: Props) => {
  return (
    <AnimateDownOnClickLeft>
      <button type="submit" className="google_button" disabled={isLoading}>
        {isLoading ? 'Loading...' : 'Sign in with Google'}
        <Image
          className={styles.icon}
          src={'/assets/icons/google.svg'}
          width={20}
          height={20}
          alt="confirmPassword"
          draggable={false}
        />
      </button>
    </AnimateDownOnClickLeft>
  )
}
