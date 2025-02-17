'use client'

import { useRouter } from 'next/navigation'
import { useTransition } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'sonner'

import { useLoginUserMutation } from '@/graphql/generated/output'
import { PUBLIC_PAGES } from '@/shared/config/pages/public.config'

import { ILoginFormData } from '../types/auth.types'

export const useLogin = () => {
  const { register, handleSubmit, reset, formState } = useForm<ILoginFormData>({
    defaultValues: {
      login: '',
      password: '',
    },
    mode: 'onChange',
  })

  const router = useRouter()
  const [isPending, startTransition] = useTransition()

  const [login, { loading }] = useLoginUserMutation({
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

  const onSubmit: SubmitHandler<ILoginFormData> = (data) => {
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
