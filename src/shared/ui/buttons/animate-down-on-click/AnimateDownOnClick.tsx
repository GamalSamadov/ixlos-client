import { motion } from 'framer-motion'

import styles from './AnimateDownOnClick.module.scss'
interface Props {
  children: React.ReactNode
}

export const AnimateDownOnClickLeft = ({ children }: Props) => {
  return (
    <motion.div
      className={styles['animate-down']}
      whileTap={{ scale: 0.96, rotate: 0.4 }}
    >
      {children}
    </motion.div>
  )
}

export const AnimateDownOnClickRight = ({ children }: Props) => {
  return (
    <motion.div
      className={styles['animate-down']}
      whileTap={{ scale: 0.96, rotate: -0.4 }}
    >
      {children}
    </motion.div>
  )
}
