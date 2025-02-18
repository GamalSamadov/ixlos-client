'use client'

import clsx from 'clsx'
import { ArrowLeft, CaseSensitive, User2 } from 'lucide-react'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { useState } from 'react'

import { FormTitle } from '@/entities/shared/ui/from/form-title/FormTitle'
import { SubmitButton } from '@/entities/shared/ui/from/submit-button/SubmitButton'
import { GetProfileByIdQuery } from '@/graphql/generated/output'
import { USER_PAGES } from '@/shared/config/pages/user.config'
import {
  EMAIL_PATTERN,
  USERNAME_PATTERN,
} from '@/shared/libs/constants/patterns.constants'
import Button from '@/shared/ui/buttons/Button'
import CustomIcon from '@/shared/ui/icons/CustomIcon'
import useCheckEmail from '@/widgets/shared/hooks/useEmailCheck'
import useCheckUsername from '@/widgets/shared/hooks/useUsernameCheck'
import styles from '@/widgets/shared/styles/Form.module.scss'

import useEditProfileInfo from '../../hooks/useEditProfileInfo'

const EditProfileInfoForm = ({
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
        <Link href={USER_PAGES.PROFILE(profile.id)}>
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
              type="username"
              placeholder={t('form.username.placeholder')}
              onKeyUp={(e) => setUsername(e.currentTarget.value)}
            />
            <div className={styles.icon_container}>
              <User2 size={25} />
            </div>
          </div>
          <p className={styles.error}>{usernameError}</p>

          <div className={styles.input_container}>
            <label htmlFor="displayName" className={styles.label}>
              {t('form.name.label')}
            </label>
            <input
              {...register('displayName', {
                required: tError('required'),
              })}
              className={styles.input}
              name="displayName"
              id="displayName"
              type="displayName"
              placeholder={t('form.name.placeholder')}
            />
            <div className={styles.icon_container}>
              <CaseSensitive size={25} />
            </div>
          </div>
          <p className={styles.error}>{displayNameError}</p>

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

export default EditProfileInfoForm
