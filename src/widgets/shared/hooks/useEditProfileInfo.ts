'use client'

import { useRouter } from 'next/navigation'
import { useTransition } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

import { useUpdateProfileInfoByUserIdMutation } from '@/graphql/generated/output'
import { USER_PAGES } from '@/shared/config/pages/user.config'

import { IEditProfileInfoFormData } from '../types/edit-profile-info.type'

const useEditProfileInfo = (profile: IEditProfileInfoFormData) => {
  const { register, handleSubmit, reset, formState } =
    useForm<IEditProfileInfoFormData>({
      defaultValues: profile,
      mode: 'onChange',
    })

  const router = useRouter()
  const [isPending, startTransition] = useTransition()

  const [addAuthor, { loading }] = useUpdateProfileInfoByUserIdMutation({
    onCompleted(data) {
      const id = data.updateProfileInfoByUserId.id
      startTransition(() => {
        reset()
        router.push(USER_PAGES.PROFILE(id))
      })
    },
    onError(err) {
      toast.error(err.message)
    },
  })

  const onSubmit = (data: IEditProfileInfoFormData) => {
    const input = {
      email: data.email,
      username: data.username,
      displayName: data.displayName,
    }
    addAuthor({ variables: { userId: profile.id, data: input } })
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

export default useEditProfileInfo
