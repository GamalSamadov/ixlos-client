'use client'

import clsx from 'clsx'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { useTranslations } from 'next-intl'

import {
  SubmitButton,
  FormTitle,
  CustomInput,
} from '@/entities/shared/ui/form/ui'
import { GetProfileByIdQuery } from '@/graphql/generated/output'
import { USER_PAGES } from '@/shared/config/pages/user.config'
import { Button } from '@/shared/ui'
import { useUpdatePassword } from '@/widgets/shared/hooks'
import styles from '@/widgets/shared/styles/Form.module.scss'

export const UpdatePasswordForm = ({
  profile,
}: {
  profile: GetProfileByIdQuery['getProfileById']
}) => {
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
            label={t('form.oldPassword.label')}
            type="password"
            name="oldPassword"
            placeholder={t('form.oldPassword.placeholder')}
            errormessage={oldPasswordError}
          />

          <CustomInput
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
            label={t('form.newPassword.label')}
            type="password"
            name="newPassword"
            placeholder={t('form.newPassword.placeholder')}
            errormessage={newPasswordError}
          />

          <CustomInput
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
            label={t('form.newPasswordRepeat.label')}
            type="password"
            name="newPasswordRepeat"
            placeholder={t('form.newPasswordRepeat.placeholder')}
            errormessage={newPasswordRepeatError}
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
