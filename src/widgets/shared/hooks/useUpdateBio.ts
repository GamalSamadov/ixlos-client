'use client'

import { useRouter } from 'next/navigation'
import { useState, useTransition } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

import { useUpdateBioByUserIdMutation } from '@/graphql/generated/output'
import { USER_PAGES } from '@/shared/config/pages/user.config'
import { IBioFormData } from '@/widgets/shared/types/bio.type'

export const useUpdateBio = (userId: string, bio: string) => {
  const [content, setContent] = useState(bio)

  const { handleSubmit, register, reset, formState } = useForm<IBioFormData>({
    mode: 'onChange',
    defaultValues: {
      bio,
    },
  })

  const router = useRouter()
  const [isPending, startTransition] = useTransition()

  const [update, { loading }] = useUpdateBioByUserIdMutation({
    onCompleted() {
      startTransition(() => {
        reset()
        router.push(USER_PAGES.PROFILE_BY_ID(userId))
      })
    },
    onError(err) {
      toast.error(err.message)
    },
  })

  const onSubmit = (data: IBioFormData) => {
    data.bio = content
    update({ variables: { userId, bio: data.bio } })
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
