import { useRouter } from 'next/navigation'
import { useTranslations } from 'next-intl'
import { ChangeEvent, useTransition } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

import {
  GetProfileByIdQuery,
  useChangeProfileAvatarMutation,
  useRemoveProfileAvatarByUserIdMutation,
} from '@/graphql/generated/output'
import { USER_PAGES } from '@/shared/config/pages/user.config'

import { IUpdateAvatarFormData } from '../types/update-avatar.type'

export const useUpdateAvatar = (
  profile: GetProfileByIdQuery['getProfileById']
) => {
  const tError = useTranslations('errors')
  const { register, handleSubmit, reset, formState, setValue } =
    useForm<IUpdateAvatarFormData>({
      defaultValues: {
        file: profile.avatar,
      },
      mode: 'onChange',
    })

  const router = useRouter()
  const [isPendingUpload, startTransitionUpload] = useTransition()
  const [isPendingRemove, startTransitionRemove] = useTransition()

  const [updateAvatar, { loading: isUploading }] =
    useChangeProfileAvatarMutation({
      onCompleted() {
        startTransitionUpload(() => {
          reset()
          router.push(USER_PAGES.PROFILE_BY_ID(profile.id))
        })
      },
      onError(err) {
        toast.error(err.message)
      },
    })

  const [removeAvatar, { loading: isRemoving }] =
    useRemoveProfileAvatarByUserIdMutation({
      onCompleted() {
        startTransitionRemove(() => {
          reset()
          router.push(USER_PAGES.PROFILE_BY_ID(profile.id))
        })
      },
      onError(err) {
        toast.error(err.message)
      },
    })

  function handleImageChange(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0]
    if (!file) return

    const MAX_FILE_SIZE = 10 * 1024 * 1024
    if (file.size > MAX_FILE_SIZE) {
      toast.error(tError('errorAvatarFileSize'))
      return
    }

    setValue('file', file)
    updateAvatar({ variables: { userId: profile.id, avatar: file } })
  }

  const isLoading = isPendingUpload || isUploading

  const isLoadingRemove = isPendingRemove || isRemoving

  return {
    register,
    handleSubmit,
    isLoading,
    formState,
    handleImageChange,
    removeAvatar,
    isLoadingRemove,
  }
}
