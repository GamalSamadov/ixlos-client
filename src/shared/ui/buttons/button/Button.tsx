import clsx from 'clsx'
import { ReactNode } from 'react'

import styles from './Button.module.scss'

interface IButtonProps {
  children: ReactNode
  className?: string
  variant?:
    | 'primary'
    | 'transparent'
    | 'white'
    | 'link'
    | 'link-active'
    | 'danger'
    | 'dark-blue'
  size?: 'standard' | 'full'
  type?: 'button' | 'submit' | 'reset' | undefined
  disabled?: boolean
  isActive?: boolean
  onClick?: () => void
}

export const Button = ({
  children,
  className = '',
  variant = 'primary',
  size = 'standard',
  type = 'button',
  disabled = false,
  isActive = false,
  onClick,
}: IButtonProps) => {
  return (
    <button
      type={type}
      className={clsx(
        styles.button,
        variant === 'primary' && styles.primary,
        variant === 'white' && styles.white,
        variant === 'transparent' && styles.transparent,
        variant === 'link' && styles.link,
        variant === 'danger' && styles.danger,
        variant === 'dark-blue' && styles['dark-blue'],
        size === 'standard' && styles.standard,
        size === 'full' && styles.full,
        isActive && styles.active,
        className
      )}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
