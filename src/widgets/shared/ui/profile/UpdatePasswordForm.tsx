'use client'

import clsx from 'clsx'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { useState } from 'react'

import { FormTitle } from '@/entities/shared/ui/from/form-title/FormTitle'
import { SubmitButton } from '@/entities/shared/ui/from/submit-button/SubmitButton'
import { GetProfileByIdQuery } from '@/graphql/generated/output'
import { USER_PAGES } from '@/shared/config/pages/user.config'
import Button from '@/shared/ui/buttons/Button'
import CustomIcon from '@/shared/ui/icons/CustomIcon'
import styles from '@/widgets/shared/styles/Form.module.scss'

import useUpdatePassword from '../../hooks/useUpdatePassword'

const UpdatePasswordForm = ({
  profile,
}: {
  profile: GetProfileByIdQuery['getProfileById']
}) => {
  const [passwordsVisibility, setPasswordsVisibility] = useState({
    oldPassword: false,
    newPassword: false,
    newPasswordRepeat: false,
  })
  const t = useTranslations('profile.updatePasswordPage')
  const tError = useTranslations('errors')

  const { register, onSubmit, isLoading, handleSubmit, formState, watch } =
    useUpdatePassword(profile.id)

  const oldPasswordError = formState.errors.oldPassword?.message
  const newPasswordError = formState.errors.newPassword?.message
  const newPasswordRepeatError = formState.errors.newPasswordRepeat?.message

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
            <label htmlFor="oldPassword" className={styles.label}>
              {t('form.oldPassword.label')}
            </label>
            <input
              {...register('oldPassword', {
                required: tError('required'),
                minLength: {
                  value: 8,
                  message: tError('passwordMinLength'),
                },
                validate: (value: string) => {
                  if (watch('newPassword') === value) {
                    return tError('passwordsMatch')
                  }
                },
              })}
              className={styles.input}
              name="oldPassword"
              id="oldPassword"
              type={passwordsVisibility.oldPassword ? 'text' : 'password'}
              placeholder={t('form.oldPassword.placeholder')}
            />
            <div
              className={styles.password_icon_container}
              onClick={() =>
                setPasswordsVisibility((prev) => ({
                  ...prev,
                  oldPassword: !prev.oldPassword,
                }))
              }
            >
              <div className={styles.icon_container}>
                {passwordsVisibility.oldPassword ? (
                  <CustomIcon size={25} variant="eye-closed" />
                ) : (
                  <CustomIcon size={25} variant="eye-opened" />
                )}
              </div>
            </div>
          </div>
          <p className={styles.error}>{oldPasswordError}</p>

          <div className={styles.input_container}>
            <label htmlFor="newPassword" className={styles.label}>
              {t('form.newPassword.label')}
            </label>
            <input
              {...register('newPassword', {
                required: tError('required'),
                minLength: {
                  value: 8,
                  message: tError('passwordMinLength'),
                },
                validate: (value: string) => {
                  if (watch('newPasswordRepeat') !== value) {
                    return tError('passwordsNotMatch')
                  }
                  if (watch('oldPassword') === value) {
                    return tError('passwordsMatch')
                  }
                },
              })}
              className={styles.input}
              name="newPassword"
              id="newPassword"
              type={passwordsVisibility.newPassword ? 'text' : 'password'}
              placeholder={t('form.newPassword.placeholder')}
            />
            <div
              className={styles.password_icon_container}
              onClick={() =>
                setPasswordsVisibility((prev) => ({
                  ...prev,
                  newPassword: !prev.newPassword,
                }))
              }
            >
              <div className={styles.icon_container}>
                {passwordsVisibility.newPassword ? (
                  <CustomIcon size={25} variant="eye-closed" />
                ) : (
                  <CustomIcon size={25} variant="eye-opened" />
                )}
              </div>
            </div>
          </div>
          <p className={styles.error}>{newPasswordError}</p>

          <div className={styles.input_container}>
            <label htmlFor="newPasswordRepeat" className={styles.label}>
              {t('form.newPasswordRepeat.label')}
            </label>
            <input
              {...register('newPasswordRepeat', {
                required: tError('required'),
                minLength: {
                  value: 8,
                  message: tError('passwordMinLength'),
                },
                validate: (value: string) => {
                  if (watch('newPassword') !== value) {
                    return tError('passwordsNotMatch')
                  }
                  if (watch('oldPassword') === value) {
                    return tError('passwordsMatch')
                  }
                },
              })}
              className={styles.input}
              name="newPasswordRepeat"
              id="newPasswordRepeat"
              type={passwordsVisibility.newPasswordRepeat ? 'text' : 'password'}
              placeholder={t('form.newPasswordRepeat.placeholder')}
            />
            <div
              className={styles.password_icon_container}
              onClick={() =>
                setPasswordsVisibility((prev) => ({
                  ...prev,
                  newPasswordRepeat: !prev.newPasswordRepeat,
                }))
              }
            >
              <div className={styles.icon_container}>
                {passwordsVisibility.newPasswordRepeat ? (
                  <CustomIcon size={25} variant="eye-closed" />
                ) : (
                  <CustomIcon size={25} variant="eye-opened" />
                )}
              </div>
            </div>
          </div>
          <p className={styles.error}>{newPasswordRepeatError}</p>

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

export default UpdatePasswordForm
