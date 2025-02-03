import Image from 'next/image'
import { PropsWithChildren } from 'react'

import styles from './MosqueBackground.module.scss'

export const MosqueBackground = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className={styles['bg-mosque']}>
        <Image
          src="/assets/vectors/mosque-3.svg"
          width={1500}
          height={1500}
          alt="mosque"
        />
      </div>

      {children}
    </>
  )
}
