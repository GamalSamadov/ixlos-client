'use client'

import { useSetAtom } from 'jotai'
import { User2 } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { useEffect, useState } from 'react'

import { ContinueWithoutSignin, AuthToggle } from '@/entities/auth/ui'
import { FormTitle, CustomInput, SubmitButton } from '@/entities/form/ui'
import { createUserCurrentPageAtom } from '@/shared/atoms/create-user-current-page.atom'
import {
  EMAIL_PATTERN,
  USERNAME_PATTERN,
} from '@/shared/libs/constants/patterns.constants'
import { CustomIcon } from '@/shared/ui'
import { useRegister } from '@/widgets/auth/hooks'
import { useCheckEmail, useCheckUsername } from '@/widgets/shared/hooks'
import styles from '@/widgets/shared/styles/Form.module.scss'

export const RegisterForm = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')

  const setCurrentPage = useSetAtom(createUserCurrentPageAtom)

  const { existingUsername } = useCheckUsername(username)
  const { existingEmail } = useCheckEmail(email)

  const t = useTranslations('auth.register')
  const tError = useTranslations('errors')

  const { register, onSubmit, handleSubmit, isLoading, formState } =
    useRegister()

  useEffect(() => {
    setCurrentPage('create-user')
  }, [setCurrentPage])

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

      <CustomInput
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
        label={t('form.email.label')}
        type="email"
        name="email"
        placeholder={t('form.email.placeholder')}
        errormessage={emailError}
        icon={<CustomIcon size={25} variant="email" />}
        onKeyUp={(e) => setEmail(e.currentTarget.value)}
      />

      <CustomInput
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
        label={t('form.username.label')}
        type="text"
        name="username"
        placeholder={t('form.username.placeholder')}
        errormessage={usernameError}
        icon={<User2 size={25} />}
        onKeyUp={(e) => setUsername(e.currentTarget.value)}
      />

      <CustomInput
        {...register('password', {
          required: tError('required'),
          minLength: {
            value: 8,
            message: tError('passwordMinLength'),
          },
        })}
        label={t('form.password.label')}
        type="password"
        name="password"
        placeholder={t('form.password.placeholder')}
        errormessage={passwordError}
      />

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
