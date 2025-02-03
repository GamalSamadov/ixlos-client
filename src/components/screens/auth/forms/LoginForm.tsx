'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { AuthToggle } from '@/components/shared/auth/AuthToggle/AuthToggle'
import { FormTitle } from '@/components/shared/auth/FormTitle/FormTitle'
import { MediaButtons } from '@/components/shared/auth/MediaButtons/MediaButtons'
import { SubmitButton } from '@/components/shared/auth/SubmitButton/SubmitButton'
import { Icon } from '@/components/ui/icons/icon/Icon'

import styles from './AuthForm.module.scss'

export const LoginForm = () => {
  const [isVisible, setIsVisible] = useState(false)

  const isLoading = false

  const { register, handleSubmit } = useForm()

  const onSubmit = () => {
    console.log('Submit')
  }

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <FormTitle title="Sign In" />
        <div className={styles.input_container}>
          <span className={styles.label}>Email or Username</span>
          <input
            {...register('email', {
              required: 'This field is required',
            })}
            className={styles.input}
            name="login"
            type="text"
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
            <Icon isEye isVisibleEye={isVisible} width={30} height={30} />
          </div>
        </div>

        <AuthToggle isLogin />

        <SubmitButton
          loadingText="Signing in..."
          isLoading={isLoading}
          confirmText="Sign in"
        />

        <MediaButtons isLoading={isLoading} />
      </form>
    </div>
  )
}
