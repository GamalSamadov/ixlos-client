'use client'

import clsx from 'clsx'
import { forwardRef, HTMLProps, ReactNode, Ref, useState } from 'react'

import { CustomIcon } from '@/shared/ui'

import styles from './CustomInput.module.scss'

interface Props extends HTMLProps<HTMLInputElement> {
  label: string
  type?: string
  name: string
  placeholder: string
  errormessage: string | undefined
  hidden?: boolean
  onKeyUp?: (e: any) => void
  onChange?: (e: any) => void
  icon?: ReactNode
}

export const CustomInput = forwardRef(
  (inputProps: Props, ref: Ref<HTMLInputElement>) => {
    const {
      label,
      type = 'text',
      name,
      placeholder,
      errormessage,
      hidden = false,
      onKeyUp,
      onChange,
      icon,
    } = inputProps

    const [isVisible, setIsVisible] = useState(false)

    return (
      <>
        <div className={styles.input_container}>
          <label htmlFor={name} className={styles.label}>
            {label}
          </label>
          <input
            {...inputProps}
            ref={ref}
            className={clsx(styles.input, hidden && styles.input_hidden)}
            name={name}
            id={name}
            type={
              type === 'password' ? (isVisible ? 'text' : 'password') : type
            }
            placeholder={placeholder}
            onKeyUp={onKeyUp}
            onChange={onChange}
            autoComplete={name}
          />
          <div
            className={
              type === 'password' ? styles.password_icon_container : 'container'
            }
            onClick={() => {
              if (type === 'password') {
                return setIsVisible(!isVisible)
              }
            }}
          >
            <div className={styles.icon_container}>
              {type === 'password' ? (
                isVisible ? (
                  <CustomIcon size={25} variant="eye-closed" />
                ) : (
                  <CustomIcon size={25} variant="eye-opened" />
                )
              ) : (
                icon
              )}
            </div>
          </div>
        </div>

        <p className={styles.error}>{errormessage}</p>
      </>
    )
  }
)

CustomInput.displayName = 'CustomInput'
