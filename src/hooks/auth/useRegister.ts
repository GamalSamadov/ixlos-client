import { useRouter } from 'next/navigation'
import { useTransition } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'sonner'

import { PUBLIC_PAGES } from '@/config/pages/public.config'
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
        router.push(PUBLIC_PAGES.HOME)
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
