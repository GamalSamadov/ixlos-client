'use client'

import { useRouter } from 'next/navigation'
import { useTransition } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'sonner'

import { useRegisterUserMutation } from '@/graphql/generated/output'
import { USER_PAGES } from '@/shared/config/pages/user.config'

import { IRegisterFormData } from '../types/auth.types'

export const useRegister = () => {
  const { register, handleSubmit, reset, formState } =
    useForm<IRegisterFormData>({
      defaultValues: {
        email: '',
        username: '',
        password: '',
      },
      mode: 'onChange',
    })

  const router = useRouter()

  const [isPending, startTransition] = useTransition()

  const [registerUser, { loading }] = useRegisterUserMutation({
    onCompleted(data) {
      startTransition(() => {
        reset()
        router.push(USER_PAGES.PROFILE_BY_ID(data.registerUser.id))
      })
    },
    onError(err) {
      toast.error(err.message)
    },
  })

  const onSubmit: SubmitHandler<IRegisterFormData> = (data) => {
    registerUser({ variables: { data } })
  }

  const isLoading = isPending || loading

  return {
    register,
    handleSubmit,
    onSubmit,
    isLoading,
    formState,
  }
}
