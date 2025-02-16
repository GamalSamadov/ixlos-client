'use client'

import clsx from 'clsx'
import { ArrowLeft, CaseSensitive, User2 } from 'lucide-react'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { useState } from 'react'

import { FormTitle } from '@/entities/shared/ui/from/form-title/FormTitle'
import { SubmitButton } from '@/entities/shared/ui/from/submit-button/SubmitButton'
import { ADMIN_PAGES } from '@/shared/config/pages/admin.config'
import {
  EMAIL_PATTERN,
  USERNAME_PATTERN,
} from '@/shared/libs/constants/patterns.constants'
import Button from '@/shared/ui/buttons/Button'
import CustomIcon from '@/shared/ui/icons/CustomIcon'
import useCheckEmail from '@/widgets/shared/hooks/useEmailCheck'
import useCheckUsername from '@/widgets/shared/hooks/useUsernameCheck'
import styles from '@/widgets/shared/styles/Form.module.scss'

import useAddAuthor from '../../hooks/useAddAuthor'

const AddAuthorForm = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [isVisible, setIsVisible] = useState(false)

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

      <div className={styles.form_container}>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
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

export default AddAuthorForm
