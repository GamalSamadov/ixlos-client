import { useAtomValue, useSetAtom } from 'jotai'
import { useTranslations } from 'next-intl'
import { ChangeEvent, useTransition } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

import { useChangeProfileAvatarMutation } from '@/graphql/generated/output'
import { createUserCurrentPageAtom } from '@/shared/atoms/create-user-current-page.atom'
import { currentUserId } from '@/shared/atoms/current-userId.atom'
import { IUpdateAvatarFormData } from '@/widgets/shared/types/update-avatar.type'

const useUserAvatarAdd = () => {
  const userId = useAtomValue(currentUserId)

  const setCreateUserCurrentPage = useSetAtom(createUserCurrentPageAtom)
  const tError = useTranslations('errors')
  const { register, handleSubmit, reset, formState, setValue } =
    useForm<IUpdateAvatarFormData>({
      defaultValues: {
        file: '',
      },
      mode: 'onChange',
    })

  const [isPending, startTransition] = useTransition()

  const [updateAvatar, { loading: isUploading }] =
    useChangeProfileAvatarMutation({
      onCompleted() {
        startTransition(() => {
          reset()
          setCreateUserCurrentPage('create-bio')
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
    updateAvatar({ variables: { userId, avatar: file } })
  }

  const isLoading = isPending || isUploading

  return {
    register,
    handleSubmit,
    isLoading,
    formState,
    handleImageChange,
  }
}

export default useUserAvatarAdd
