'use client'

import { useTranslations } from 'next-intl'

import { ContinueWithoutSignin } from '@/entities/auth/ui'
import { AuthToggle } from '@/entities/auth/ui/auth-toggle/AuthToggle'
import { FormTitle, CustomInput, SubmitButton } from '@/entities/form/ui'
import { CustomIcon } from '@/shared/ui'
import { useLogin } from '@/widgets/auth/hooks/useLogin'
import styles from '@/widgets/shared/styles/Form.module.scss'

export const LoginForm = () => {
  const t = useTranslations('auth.login')
  const tError = useTranslations('errors')

  const { register, onSubmit, isLoading, handleSubmit, formState } = useLogin()

  const loginError = formState.errors.login?.message
  const passwordError = formState.errors.password?.message

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={styles.form}
      autoComplete="on"
    >
      <FormTitle title={t('title')} />

      <CustomInput
        {...register('login', {
          required: tError('required'),
        })}
        label={t('form.login.label')}
        type="text"
        name="login"
        placeholder={t('form.login.placeholder')}
        errormessage={loginError}
        icon={<CustomIcon size={25} variant="email" />}
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

      <AuthToggle isLogin />

      <SubmitButton
        loadingText={t('loading')}
        isLoading={isLoading}
        confirmText={t('form.confirm')}
      />

      <ContinueWithoutSignin />
    </form>
  )
}
