'use client'

import { useAtomValue } from 'jotai'
import { useRouter } from 'nextjs-toploader/app'
import { useState, useTransition } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

import { useUpdateBioByUserIdMutation } from '@/graphql/generated/output'
import { currentUserId } from '@/shared/atoms/current-userId.atom'
import { ADMIN_PAGES } from '@/shared/config/pages/admin.config'
import { IBioFormData } from '@/widgets/shared/types/bio.type'

export const useAuthorAddBio = () => {
  const userId = useAtomValue(currentUserId)

  const [content, setContent] = useState('')

  const { handleSubmit, register, reset, formState } = useForm<IBioFormData>({
    mode: 'onChange',
    defaultValues: {
      bio: '',
    },
  })

  const router = useRouter()
  const [isPending, startTransition] = useTransition()

  const [update, { loading }] = useUpdateBioByUserIdMutation({
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
