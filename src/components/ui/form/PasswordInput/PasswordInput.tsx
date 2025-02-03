'use client'

import { useState } from 'react'

import styles from './EyeIcon.module.scss'
import { Icon } from '../../Icon/Icon'

export const EyeIcon = () => {
  // TODO:
  const [isVisible, setIsVisible] = useState(false)
  return (
    <div
      className={styles.password_icon_container}
      onClick={() => setIsVisible(!isVisible)}
    >
      <Icon isEye isVisibleEye={isVisible} width={30} height={30} />
    </div>
  )
}
