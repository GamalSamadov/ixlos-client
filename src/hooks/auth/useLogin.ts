import { useRouter } from 'next/navigation'
import { useTransition } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'sonner'

import { useLoginUserMutation } from '@/graphql/generated/output'
import { ILoginFormData } from '@/types/user/user.types'

export const useLogin = () => {
  const { register, handleSubmit, reset } = useForm<ILoginFormData>()

  const router = useRouter()
  const [isPending, startTransition] = useTransition()

  const [login, { loading }] = useLoginUserMutation({
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

  const onSubmit: SubmitHandler<ILoginFormData> = (data) => {
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
