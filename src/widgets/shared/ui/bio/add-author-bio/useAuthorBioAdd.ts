'use client'

import { useRouter } from 'next/navigation'
import { useState, useTransition } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

import { useUpdateAuthorBioMutation } from '@/graphql/generated/output'
import { ADMIN_PAGES } from '@/shared/config/pages/admin.config'

import { IAuthorBioFormData } from '../../../../admin/types/author-bio.type'

const useAuthorBioUpdate = (id: string) => {
  const [content, setContent] = useState('')

  const { handleSubmit, register, reset, formState } =
    useForm<IAuthorBioFormData>({
      mode: 'onChange',
      defaultValues: {
        bio: '',
      },
    })

  const router = useRouter()
  const [isPending, startTransition] = useTransition()

  const [update, { loading }] = useUpdateAuthorBioMutation({
    onCompleted() {
      startTransition(() => {
        reset()
        router.push(ADMIN_PAGES.AUTHORS)
      })
    },
    onError(err) {
      toast.error(err.message)
    },
  })

  const onSubmit = (data: IAuthorBioFormData) => {
    data.bio = content
    update({ variables: { id, bio: data.bio } })
  }

  const isLoading = loading || isPending || !content || content === '<p></p>'

  return {
    content,
    setContent,
    handleSubmit,
    register,
    onSubmit,
    isLoading,
    formState,
  }
}

export default useAuthorBioUpdate
