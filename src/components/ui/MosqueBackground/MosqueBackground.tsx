import { PropsWithChildren } from 'react'
import styles from './MosqueBackground.module.scss'

export const MosqueBackground = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className={styles['bg-mosque']}></div>

      {children}
    </>
  )
}
