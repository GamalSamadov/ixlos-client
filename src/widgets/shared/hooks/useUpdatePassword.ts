import { useRouter } from 'next/navigation'
import { useTransition } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

import { useUpdatePasswordByUserIdMutation } from '@/graphql/generated/output'
import { USER_PAGES } from '@/shared/config/pages/user.config'

import { IUpdatePasswordFormData } from '../types/update-password.type'

const useUpdatePassword = (id: string) => {
  const { register, handleSubmit, reset, formState, watch } =
    useForm<IUpdatePasswordFormData>({
      defaultValues: {
        oldPassword: '',
        newPassword: '',
        newPasswordRepeat: '',
      },
      mode: 'onChange',
    })

  const router = useRouter()
  const [isPending, startTransition] = useTransition()

  const [updatePassword, { loading }] = useUpdatePasswordByUserIdMutation({
    onCompleted() {
      startTransition(() => {
        reset()
        router.push(USER_PAGES.PROFILE(id))
      })
    },
    onError(err) {
      toast.error(err.message)
    },
  })

  const onSubmit = (data: IUpdatePasswordFormData) => {
    const input = {
      oldPassword: data.oldPassword,
      newPassword: data.newPassword,
      newPasswordRepeat: data.newPasswordRepeat,
    }
    updatePassword({ variables: { userId: id, data: input } })
  }

  const isLoading = isPending || loading

  return {
    register,
    handleSubmit,
    onSubmit,
    isLoading,
    formState,
    watch,
  }
}

export default useUpdatePassword
