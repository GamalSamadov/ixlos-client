'use client'

import { useState } from 'react'

import { AuthToggle } from '@/components/shared/auth/AuthToggle/AuthToggle'
import { FormTitle } from '@/components/shared/auth/FormTitle/FormTitle'
import { MediaButtons } from '@/components/shared/auth/MediaButtons/MediaButtons'
import { SubmitButton } from '@/components/shared/auth/SubmitButton/SubmitButton'
import { Icon } from '@/components/ui/icons/icon/Icon'
import { useRegister } from '@/hooks/auth/useRegister'

import styles from './AuthForm.module.scss'

export const RegisterForm = () => {
  const [isVisible, setIsVisible] = useState(false)

  const { register, onSubmit, handleSubmit, isLoading } = useRegister()

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <FormTitle title="Sign Up" />
        <div className={styles.input_container}>
          <span className={styles.label}>Email</span>
          <input
            {...register('email', {
              required: 'This field is required',
            })}
            className={styles.input}
            name="email"
            type="email"
            placeholder="Enter..."
          />
          <Icon
            src="/assets/icons/email.svg"
            width={25}
            height={25}
            alt="email"
          />
        </div>

        <div className={styles.input_container}>
          <span className={styles.label}>Username</span>
          <input
            {...register('username', {
              required: 'This field is required',
            })}
            className={styles.input}
            name="username"
            type="text"
            placeholder="Enter..."
          />
          <Icon
            src="/assets/icons/email.svg"
            width={25}
            height={25}
            alt="username"
          />
        </div>

        <div className={styles.input_container}>
          <span className={styles.label}>Password</span>
          <input
            {...register('password', {
              required: 'This field is required',
            })}
            className={styles.input}
            name="password"
            type={isVisible ? 'text' : 'password'}
            placeholder="Enter..."
          />
          <div
            className={styles.password_icon_container}
            onClick={() => setIsVisible(!isVisible)}
          >
            <Icon isEye isVisibleEye={isVisible} width={25} height={25} />
          </div>
        </div>
        <AuthToggle />

        <SubmitButton
          loadingText="Signing up..."
          isLoading={isLoading}
          confirmText="Sign up"
        />

        <MediaButtons isLoading={isLoading} />
      </form>
    </div>
  )
}
