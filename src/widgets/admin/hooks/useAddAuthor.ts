'use client'

import { useRouter } from 'next/navigation'
import { useTransition } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

import { useCreateAuthorMutation } from '@/graphql/generated/output'
import { ADMIN_PAGES } from '@/shared/config/pages/admin.config'

import { IAddAuthorFormData } from '../types/add-author.type'

const useAddAuthor = () => {
  // TODO: add avatar + country
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

  const router = useRouter()
  const [isPending, startTransition] = useTransition()

  const [addAuthor, { loading }] = useCreateAuthorMutation({
    onCompleted(data) {
      const id = data.createAuthor.id
      startTransition(() => {
        reset()
        router.push(ADMIN_PAGES.AUTHOR_BIO(id))
      })
    },
    onError(err) {
      console.error(err)
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
