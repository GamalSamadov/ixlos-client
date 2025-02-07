'use client'

import { useRouter } from 'next/navigation'
import { useTransition } from 'react'
import { toast } from 'sonner'

import { useLogoutUserMutation } from '@/graphql/generated/output'
import { PUBLIC_PAGES } from '@/shared/config/pages/public.config'

const useLogout = () => {
  const router = useRouter()
  const [isPending, startTransition] = useTransition()

  const [logout, { loading }] = useLogoutUserMutation({
    onCompleted() {
      startTransition(() => {
        router.push(PUBLIC_PAGES.LOGIN)
      })
    },
    onError(err) {
      toast.error(err.message)
    },
  })

  const isLoading = loading || isPending

  return {
    logout,
    isLoading,
  }
}

export default useLogout
