'use client'

import { useAtom, useSetAtom } from 'jotai'
import { useRouter } from 'nextjs-toploader/app'
import { useState, useTransition } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

import { Role, useUpdateBioByUserIdMutation } from '@/graphql/generated/output'
import { createUserCurrentPageAtom } from '@/shared/atoms/create-user-current-page.atom'
import { currentUserRights } from '@/shared/atoms/current-user-rights.atom'
import { currentUserId } from '@/shared/atoms/current-userId.atom'
import { ADMIN_PAGES } from '@/shared/config/pages'
import { PUBLIC_PAGES } from '@/shared/config/pages/public.config'
import { IBioFormData } from '@/widgets/shared/types/bio.type'

export const useUserBioAdd = () => {
  const [userId, setUserId] = useAtom(currentUserId)
  const [userRights, setUserRights] = useAtom(currentUserRights)
  const setCreateUserCurrentPage = useSetAtom(createUserCurrentPageAtom)

  const [content, setContent] = useState('')

  const { handleSubmit, register, reset, formState } = useForm<IBioFormData>({
    mode: 'onChange',
    defaultValues: {
      bio: '',
    },
  })

  const resetStatesAndPush = () => {
    setCreateUserCurrentPage('create-user')
    setUserId('')

    if (userRights.includes(Role.Admin)) {
      router.push(ADMIN_PAGES.HOME)
    } else {
      router.push(PUBLIC_PAGES.HOME)
    }

    setUserRights([Role.User])
  }

  const router = useRouter()
  const [isPending, startTransition] = useTransition()

  const [update, { loading }] = useUpdateBioByUserIdMutation({
    onCompleted() {
      startTransition(() => {
        reset()
        resetStatesAndPush()
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
    resetStatesAndPush,
  }
}
