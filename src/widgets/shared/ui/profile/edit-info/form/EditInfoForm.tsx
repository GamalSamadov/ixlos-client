'use client'

import clsx from 'clsx'
import { ArrowLeft, CaseSensitive, User2 } from 'lucide-react'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { useState } from 'react'

import {
  SubmitButton,
  FormTitle,
  CustomInput,
} from '@/entities/shared/ui/form/ui'
import { GetProfileByIdQuery } from '@/graphql/generated/output'
import { USER_PAGES } from '@/shared/config/pages/user.config'
import {
  EMAIL_PATTERN,
  USERNAME_PATTERN,
} from '@/shared/libs/constants/patterns.constants'
import { Button, CustomIcon } from '@/shared/ui'
import {
  useEditProfileInfo,
  useCheckUsername,
  useCheckEmail,
} from '@/widgets/shared/hooks'
import styles from '@/widgets/shared/styles/Form.module.scss'

export const EditProfileInfoForm = ({
  profile,
}: {
  profile: GetProfileByIdQuery['getProfileById']
}) => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')

  const { existingUsername } = useCheckUsername(username)
  const { existingEmail } = useCheckEmail(email)

  const t = useTranslations('profile.updateInfo')
  const tError = useTranslations('errors')

  const initialValues = {
    id: profile.id,
    email: profile.email,
    username: profile.username,
    displayName: profile.displayName,
  }

  const { register, onSubmit, isLoading, handleSubmit, formState } =
    useEditProfileInfo(initialValues)

  const emailError = formState.errors.email?.message
  const usernameError = formState.errors.username?.message
  const displayNameError = formState.errors.displayName?.message

  return (
    <section className={clsx(styles.container)}>
      <div className={styles.top_link}>
        <Link href={USER_PAGES.PROFILE_BY_ID(profile.id)}>
          <Button variant="link">
            <ArrowLeft size={30} /> {t('back')}
          </Button>
        </Link>
      </div>

      <div
        className={clsx(
          styles.form_container,
          'bg_gray_custom',
          'h_screen_with_header'
        )}
      >
        <form onSubmit={handleSubmit(onSubmit)} className={clsx(styles.form)}>
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
            {...register('displayName', {
              required: tError('required'),
            })}
            label={t('form.name.label')}
            type="text"
            name="displayName"
            placeholder={t('form.name.placeholder')}
            errormessage={displayNameError}
            icon={<CaseSensitive size={25} />}
            onKeyUp={(e) => setUsername(e.currentTarget.value)}
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
