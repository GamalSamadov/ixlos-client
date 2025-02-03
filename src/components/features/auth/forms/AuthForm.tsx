'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { AuthToggle } from '@/components/ui/form/AuthToggle/AuthToggle'
import { FormTitle } from '@/components/ui/form/FormTitle/FormTitle'
import { MediaButtons } from '@/components/ui/form/MediaButtons/MediaButtons'
import { SubmitButton } from '@/components/ui/form/SubmitButton/SubmitButton'
import { Icon } from '@/components/ui/Icon/Icon'

import styles from './AuthForm.module.scss'

interface Props {
  isLogin?: boolean | undefined
}

export const AuthForm = ({ isLogin }: Props) => {
  const [isVisible, setIsVisible] = useState({
    registerPassword: false,
    registerConfirmPassword: false,
    loginPassword: false,
  })

  const isLoading = false

  const { register, handleSubmit } = useForm()

  const onSubmit = () => {
    console.log('Submit')
  }

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        {isLogin ? (
          <>
            <FormTitle title="Sign In" />
            <div className={styles.input_container}>
              <span className={styles.label}>Email</span>
              <input
                {...register('email', {
                  required: 'This field is required',
                })}
                className={styles.input}
                name="email"
                type="email"
                placeholder="Enter..."
              />

              <Icon
                src="/assets/icons/email.svg"
                width={25}
                height={25}
                alt="email"
              />
            </div>
            <div className={styles.input_container}>
              <span className={styles.label}>Password</span>
              <input
                {...register('password', {
                  required: 'This field is required',
                })}
                className={styles.input}
                name="password"
                type={isVisible.loginPassword ? 'text' : 'password'}
                placeholder="Enter..."
              />

              <div
                className={styles.password_icon_container}
                onClick={() =>
                  setIsVisible({
                    ...isVisible,
                    loginPassword: !isVisible.loginPassword,
                  })
                }
              >
                <Icon
                  isEye
                  isVisibleEye={isVisible.loginPassword}
                  width={30}
                  height={30}
                />
              </div>
            </div>

            <AuthToggle isLogin />
          </>
        ) : (
          <>
            <FormTitle title="Sign Up" />
            <div className={styles.input_container}>
              <span className={styles.label}>Email</span>
              <input
                {...register('email', {
                  required: 'This field is required',
                })}
                className={styles.input}
                name="email"
                type="email"
                placeholder="Enter..."
              />
              <Icon
                src="/assets/icons/email.svg"
                width={25}
                height={25}
                alt="email"
              />
            </div>

            <div className={styles.input_container}>
              <span className={styles.label}>Password</span>
              <input
                {...register('password', {
                  required: 'This field is required',
                })}
                className={styles.input}
                name="password"
                type={isVisible.registerPassword ? 'text' : 'password'}
                placeholder="Enter..."
              />
              <div
                className={styles.password_icon_container}
                onClick={() =>
                  setIsVisible({
                    ...isVisible,
                    registerPassword: !isVisible.registerPassword,
                  })
                }
              >
                <Icon
                  isEye
                  isVisibleEye={isVisible.registerPassword}
                  width={25}
                  height={25}
                />
              </div>
            </div>
            <AuthToggle />
          </>
        )}

        <SubmitButton isAuth isLoading={isLoading} isLogin={isLogin} />

        <MediaButtons isLoading={isLoading} />
      </form>
    </div>
  )
}
