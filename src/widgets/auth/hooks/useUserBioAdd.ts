'use client'

import { useAtomValue, useSetAtom } from 'jotai'
import { useRouter } from 'next/navigation'
import { useState, useTransition } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

import { useUpdateBioByUserIdMutation } from '@/graphql/generated/output'
import { createUserCurrentPageAtom } from '@/shared/atoms/create-user-current-page.atom'
import { currentUserId } from '@/shared/atoms/current-userId.atom'
import { PUBLIC_PAGES } from '@/shared/config/pages/public.config'
import { IBioFormData } from '@/widgets/shared/types/bio.type'

export const useUserBioAdd = () => {
  const userId = useAtomValue(currentUserId)
  const setCreateUserCurrentPage = useSetAtom(createUserCurrentPageAtom)
  const setUserId = useSetAtom(currentUserId)

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
        setCreateUserCurrentPage('create-user')
        setUserId('')
        router.push(PUBLIC_PAGES.HOME)
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
