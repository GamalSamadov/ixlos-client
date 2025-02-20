'use client'

import { User2 } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { useState } from 'react'

import { AuthToggle } from '@/entities/auth/ui/auth-toggle/AuthToggle'
import ContinueWithoutSignin from '@/entities/auth/ui/continue-without-singnin/ContinueWithoutSignin'
import { FormTitle } from '@/entities/shared/ui/from/form-title/FormTitle'
import { SubmitButton } from '@/entities/shared/ui/from/submit-button/SubmitButton'
import {
  EMAIL_PATTERN,
  USERNAME_PATTERN,
} from '@/shared/libs/constants/patterns.constants'
import CustomIcon from '@/shared/ui/icons/CustomIcon'
import { useRegister } from '@/widgets/auth/hooks/useRegister'
import useCheckEmail from '@/widgets/shared/hooks/useEmailCheck'
import useCheckUsername from '@/widgets/shared/hooks/useUsernameCheck'
import styles from '@/widgets/shared/styles/Form.module.scss'

export const RegisterForm = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')

  const { existingUsername } = useCheckUsername(username)
  const { existingEmail } = useCheckEmail(email)

  const t = useTranslations('auth.register')
  const tError = useTranslations('errors')

  const { register, onSubmit, handleSubmit, isLoading, formState } =
    useRegister()

  const emailError = formState.errors.email?.message
  const usernameError = formState.errors.username?.message
  const passwordError = formState.errors.password?.message

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={styles.form}
      autoComplete="on"
    >
      <FormTitle title={t('title')} />
      <div className={styles.input_container}>
        <label htmlFor="email" className={styles.label}>
          {t('form.email.label')}
        </label>
        <input
          {...register('email', {
            required: tError('required'),
            pattern: {
              value: EMAIL_PATTERN,
              message: tError('invalidEmail'),
            },
            validate: {
              isEmailUnique: (value) =>
                existingEmail !== value || tError('emailExists'),
            },
          })}
          className={styles.input}
          name="email"
          id="email"
          type="email"
          placeholder={t('form.email.placeholder')}
          onKeyUp={(e) => setEmail(e.currentTarget.value)}
          autoComplete="email"
        />
        <div className={styles.icon_container}>
          <CustomIcon size={25} variant="email" />
        </div>
      </div>

      <p className={styles.error}>{emailError}</p>

      <div className={styles.input_container}>
        <label htmlFor="username" className={styles.label}>
          {t('form.username.label')}
        </label>
        <input
          {...register('username', {
            required: tError('required'),
            pattern: {
              value: USERNAME_PATTERN,
              message: tError('invalidUsername'),
            },
            validate: {
              isUsernameUnique: (value) =>
                existingUsername !== value || tError('usernameExists'),
            },
            minLength: {
              value: 3,
              message: tError('usernameMinLength'),
            },
          })}
          className={styles.input}
          name="username"
          id="username"
          type="text"
          placeholder={t('form.username.placeholder')}
          onKeyUp={(e) => setUsername(e.currentTarget.value)}
          autoComplete="username"
        />
        <div className={styles.icon_container}>
          <User2 size={25} />
        </div>
      </div>

      <p className={styles.error}>{usernameError}</p>

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
          autoComplete="password"
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
