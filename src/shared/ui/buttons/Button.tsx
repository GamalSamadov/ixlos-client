import clsx from 'clsx'
import { ReactNode } from 'react'

import styles from './Button.module.scss'

interface IButtonProps {
  children: ReactNode
  className?: string
  variant?: 'primary' | 'transparent' | 'white' | 'link' | 'link-active'
  size?: 'standard' | 'full'
  type?: 'button' | 'submit' | 'reset' | undefined
  disabled?: boolean
  onClick?: () => void
}

const Button = ({
  children,
  className = '',
  variant = 'primary',
  size = 'standard',
  type = 'button',
  disabled = false,
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
        size === 'standard' && styles.standard,
        size === 'full' && styles.full,
        className
      )}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button
