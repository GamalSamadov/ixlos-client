'use client'

import { useSetAtom } from 'jotai'
import { useTransition } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

import { useCreateAuthorMutation } from '@/graphql/generated/output'
import { createUserCurrentPageAtom } from '@/shared/atoms/create-user-current-page.atom'
import { currentUserId } from '@/shared/atoms/current-userId.atom'

import { IAddAuthorFormData } from '../types/add-author.type'

const useAddAuthor = () => {
  const setCreateUserCurrentPage = useSetAtom(createUserCurrentPageAtom)
  const setUserId = useSetAtom(currentUserId)
  // TODO: country
  const { register, handleSubmit, reset, formState } =
    useForm<IAddAuthorFormData>({
      defaultValues: {
        email: '',
        username: '',
        password: '',
        displayName: '',
      },
      mode: 'onChange',
    })

  const [isPending, startTransition] = useTransition()

  const [addAuthor, { loading }] = useCreateAuthorMutation({
    onCompleted(data) {
      const authorId = data.createAuthor
      startTransition(() => {
        reset()
        setCreateUserCurrentPage('create-avatar')
        setUserId(authorId)
      })
    },
    onError(err) {
      toast.error(err.message)
    },
  })

  const onSubmit = (data: IAddAuthorFormData) => {
    addAuthor({ variables: { data } })
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

export default useAddAuthor
