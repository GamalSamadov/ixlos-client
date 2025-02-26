import clsx from 'clsx'

import { Vector } from '@/shared/ui'

import styles from './IslamicNumber.module.scss'

export const IslamicNumber = ({
  number,
  isAyah = false,
}: {
  number: number
  isAyah?: boolean
}) => {
  return (
    <span className={styles.container}>
      <span className={styles.vector}>
        <Vector size={40} variant="islamic-number-container" />
      </span>
      <span
        className={clsx(
          styles.number,
          isAyah ? styles.ayah_position : styles.number_position
        )}
      >
        {number}
      </span>
    </span>
  )
}
