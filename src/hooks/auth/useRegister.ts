import { useRouter } from 'next/navigation'
import { useTransition } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'sonner'

import { useCreateUserMutation } from '@/graphql/generated/output'
import { IRegisterFormData } from '@/types/user/user.types'

export const useRegister = () => {
  const { register, handleSubmit, reset } = useForm<IRegisterFormData>()

  const router = useRouter()

  const [isPending, startTransition] = useTransition()

  const [login, { loading }] = useCreateUserMutation({
    onCompleted() {
      startTransition(() => {
        reset()
        router.push('/')
      })
    },
    onError(err) {
      toast.error(err.message)
    },
  })

  const onSubmit: SubmitHandler<IRegisterFormData> = (data) => {
    login({ variables: { data } })
  }

  const isLoading = isPending || loading

  return {
    register,
    handleSubmit,
    onSubmit,
    isLoading,
  }
}
