import { m } from 'framer-motion'

import styles from './AnimateDownOnClick.module.scss'
interface Props {
  children: React.ReactNode
}

export const AnimateDownOnClickLeft = ({ children }: Props) => {
  return (
    <m.span
      className={styles['animate-down']}
      whileTap={{ scale: 0.96, rotate: 0.4 }}
      tabIndex={-1}
    >
      {children}
    </m.span>
  )
}

export const AnimateDownOnClickRight = ({ children }: Props) => {
  return (
    <m.span
      className={styles['animate-down']}
      whileTap={{ scale: 0.96, rotate: -0.4 }}
      tabIndex={-1}
    >
      {children}
    </m.span>
  )
}
