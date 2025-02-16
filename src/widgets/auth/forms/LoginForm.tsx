'use client'

import { useTranslations } from 'next-intl'
import { useState } from 'react'

import { AuthToggle } from '@/entities/auth/ui/auth-toggle/AuthToggle'
import ContinueWithoutSignin from '@/entities/auth/ui/continue-without-singnin/ContinueWithoutSignin'
import { FormTitle } from '@/entities/shared/ui/from/form-title/FormTitle'
import { SubmitButton } from '@/entities/shared/ui/from/submit-button/SubmitButton'
import CustomIcon from '@/shared/ui/icons/CustomIcon'
import styles from '@/widgets/shared/styles/Form.module.scss'

import { useLogin } from '../hooks/useLogin'

export const LoginForm = () => {
  const [isVisible, setIsVisible] = useState(false)

  const t = useTranslations('auth.login')
  const tError = useTranslations('errors')

  const { register, onSubmit, isLoading, handleSubmit, formState } = useLogin()

  const loginError = formState.errors.login?.message
  const passwordError = formState.errors.password?.message

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <FormTitle title={t('title')} />
      <div className={styles.input_container}>
        <label className={styles.label} htmlFor="login">
          {t('form.login.label')}
        </label>
        <input
          {...register('login', {
            required: tError('required'),
          })}
          className={styles.input}
          name="login"
          type="text"
          id="login"
          placeholder={t('form.login.placeholder')}
        />

        <div className={styles.icon_container}>
          <CustomIcon size={25} variant="email" />
        </div>
      </div>
      <p className={styles.error}>{loginError}</p>
      <div className={styles.input_container}>
        <label htmlFor="password" className={styles.label}>
          {t('form.password.label')}
        </label>
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
          id="password"
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

      <AuthToggle isLogin />

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
