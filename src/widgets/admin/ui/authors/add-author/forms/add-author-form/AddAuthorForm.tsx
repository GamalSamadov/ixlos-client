'use client'

import clsx from 'clsx'
import { ArrowLeft, CaseSensitive, User2 } from 'lucide-react'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { useState } from 'react'

import {
  CustomInput,
  FormTitle,
  SubmitButton,
} from '@/entities/shared/ui/form/ui'
import { ADMIN_PAGES } from '@/shared/config/pages/admin.config'
import {
  EMAIL_PATTERN,
  USERNAME_PATTERN,
} from '@/shared/libs/constants/patterns.constants'
import { Button, CustomIcon } from '@/shared/ui'
import { useAddAuthor } from '@/widgets/admin/hooks'
import { useCheckEmail, useCheckUsername } from '@/widgets/shared/hooks'
import styles from '@/widgets/shared/styles/Form.module.scss'

export const AddAuthorForm = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')

  const { existingUsername } = useCheckUsername(username)
  const { existingEmail } = useCheckEmail(email)

  const t = useTranslations('admin.addAuthor')
  const tError = useTranslations('errors')
  const { register, onSubmit, isLoading, handleSubmit, formState } =
    useAddAuthor()

  const emailError = formState.errors.email?.message
  const usernameError = formState.errors.username?.message
  const passwordError = formState.errors.password?.message
  const displayNameError = formState.errors.displayName?.message

  return (
    <section className={clsx(styles.container)}>
      <div className={styles.top_link}>
        <Link href={ADMIN_PAGES.AUTHORS}>
          <Button variant="link">
            <ArrowLeft size={30} /> {t('back')}
          </Button>
        </Link>
      </div>

      <div className={clsx(styles.form_container, 'h_screen_with_header')}>
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

          <CustomInput
            {...register('displayName', {
              required: tError('required'),
            })}
            label={t('form.name.label')}
            type="text"
            name="displayName"
            placeholder={t('form.name.placeholder')}
            errormessage={displayNameError}
            icon={<CaseSensitive size={25} />}
          />

          <SubmitButton
            loadingText={t('form.loading')}
            isLoading={isLoading}
            confirmText={t('form.confirm')}
          />
        </form>
      </div>
    </section>
  )
}
