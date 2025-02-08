import { m } from 'framer-motion'

import styles from './AnimateDownOnClick.module.scss'
interface Props {
  children: React.ReactNode
}

export const AnimateDownOnClickLeft = ({ children }: Props) => {
  return (
    <m.div
      className={styles['animate-down']}
      whileTap={{ scale: 0.96, rotate: 0.4 }}
    >
      {children}
    </m.div>
  )
}

export const AnimateDownOnClickRight = ({ children }: Props) => {
  return (
    <m.div
      className={styles['animate-down']}
      whileTap={{ scale: 0.96, rotate: -0.4 }}
    >
      {children}
    </m.div>
  )
}
