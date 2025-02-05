import clsx from 'clsx'
import { ReactNode } from 'react'

import styles from './Button.module.scss'

interface IButtonProps {
  children: ReactNode
  className?: string
  variant?: 'primary' | 'transparent' | 'light'
  size?: 'standard' | 'full'
  type?: 'button' | 'submit' | 'reset' | undefined
  disabled?: boolean
}

const Button = ({
  children,
  className = '',
  variant = 'primary',
  size = 'standard',
  type = 'button',
  disabled = false,
}: IButtonProps) => {
  return (
    <button
      type={type}
      className={clsx(
        styles.button,
        variant === 'primary' && styles.primary,
        variant === 'light' && styles.light,
        variant === 'transparent' && styles.transparent,
        size === 'standard' && styles.standard,
        size === 'full' && styles.full,
        className
      )}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default Button
