'use client'

import { useRouter } from 'next/navigation'
import { useTransition } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'sonner'

import { useCreateUserMutation } from '@/graphql/generated/output'
import { PUBLIC_PAGES } from '@/shared/config/pages/public.config'

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

  const [login, { loading }] = useCreateUserMutation({
    onCompleted() {
      startTransition(() => {
        reset()
        router.push(PUBLIC_PAGES.HOME)
      })
    },
    onError(err) {
      toast.error(err.message)
    },
  })

  const onSubmit: SubmitHandler<IRegisterFormData> = (data) => {
    login({ variables: { data } })
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
