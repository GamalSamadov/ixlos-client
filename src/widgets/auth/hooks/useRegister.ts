'use client'

import { useSetAtom } from 'jotai'
import { useTransition } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'sonner'

import { useRegisterUserMutation } from '@/graphql/generated/output'
import { createUserCurrentPageAtom } from '@/shared/atoms/create-user-current-page.atom'
import { currentUserId } from '@/shared/atoms/current-userId.atom'

import { IRegisterFormData } from '../types/auth.types'

export const useRegister = () => {
  const setCreateUserCurrentPage = useSetAtom(createUserCurrentPageAtom)
  const setUserId = useSetAtom(currentUserId)

  const { register, handleSubmit, reset, formState } =
    useForm<IRegisterFormData>({
      defaultValues: {
        email: '',
        username: '',
        password: '',
      },
      mode: 'onChange',
    })

  const [isPending, startTransition] = useTransition()

  const [registerUser, { loading }] = useRegisterUserMutation({
    onCompleted(data) {
      const userId = data.registerUser.id
      startTransition(() => {
        reset()
        setCreateUserCurrentPage('create-avatar')
        setUserId(userId)
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
