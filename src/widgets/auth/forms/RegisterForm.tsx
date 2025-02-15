'use client'

import { useTranslations } from 'next-intl'
import { useState } from 'react'

import { AuthToggle } from '@/entities/auth/ui/auth-toggle/AuthToggle'
import ContinueWithoutSignin from '@/entities/auth/ui/continue-without-singnin/ContinueWithoutSignin'
import { FormTitle } from '@/entities/auth/ui/form-title/FormTitle'
import { SubmitButton } from '@/entities/auth/ui/submit-button/SubmitButton'
import CustomIcon from '@/shared/ui/icons/CustomIcon'
import { useRegister } from '@/widgets/auth/hooks/useRegister'

import styles from './AuthForm.module.scss'

export const RegisterForm = () => {
  const [isVisible, setIsVisible] = useState(false)
  const t = useTranslations('auth.register')
  const tError = useTranslations('auth.errors')

  const { register, onSubmit, handleSubmit, isLoading, formState } =
    useRegister()

  const emailError = formState.errors.email?.message
  const usernameError = formState.errors.username?.message
  const passwordError = formState.errors.password?.message

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <FormTitle title={t('title')} />
      <div className={styles.input_container}>
        <span className={styles.label}>{t('form.email.label')}</span>
        <input
          {...register('email', {
            required: tError('required'),
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: tError('invalidEmail'),
            },
          })}
          className={styles.input}
          name="email"
          type="email"
          placeholder={t('form.email.placeholder')}
        />
        <div className={styles.icon_container}>
          <CustomIcon size={25} variant="email" />
        </div>
      </div>

      <p className={styles.error}>{emailError}</p>

      <div className={styles.input_container}>
        <span className={styles.label}>{t('form.username.label')}</span>
        <input
          {...register('username', {
            required: tError('required'),
          })}
          className={styles.input}
          name="username"
          type="text"
          placeholder={t('form.username.placeholder')}
        />
        <div className={styles.icon_container}>
          <CustomIcon size={25} variant="email" />
        </div>
      </div>

      <p className={styles.error}>{usernameError}</p>

      <div className={styles.input_container}>
        <span className={styles.label}>{t('form.password.label')}</span>
        <input
          {...register('password', {
            required: tError('required'),
            minLength: {
              value: 8,
              message: tError('passwordMinLength'),
            },
          })}
          className={styles.input}
          name="password"
          type={isVisible ? 'text' : 'password'}
          placeholder={t('form.password.placeholder')}
        />
        <div
          className={styles.password_icon_container}
          onClick={() => setIsVisible(!isVisible)}
        >
          <div className={styles.icon_container}>
            {isVisible ? (
              <CustomIcon size={25} variant="eye-closed" />
            ) : (
              <CustomIcon size={25} variant="eye-opened" />
            )}
          </div>
        </div>
      </div>

      <p className={styles.error}>{passwordError}</p>
      <AuthToggle />

      <SubmitButton
        loadingText={t('loading')}
        isLoading={isLoading}
        confirmText={t('form.confirm')}
      />

      <ContinueWithoutSignin />

      {/* TODO: implement google auth and apple auth */}
      {/* <MediaButtons isLoading={isLoading} /> */}
    </form>
  )
}
