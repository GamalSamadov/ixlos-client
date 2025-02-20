'use client'

import { useRouter } from 'next/navigation'
import { useTransition } from 'react'
import { toast } from 'sonner'

import {
  Role,
  useDeleteUserAndLogoutMutation,
  useDeleteUserByIdMutation,
  useGetCurrentSessionQuery,
} from '@/graphql/generated/output'
import { ADMIN_PAGES } from '@/shared/config/pages/admin.config'
import { PUBLIC_PAGES } from '@/shared/config/pages/public.config'

const useDeleteAccount = (id: string) => {
  const router = useRouter()
  const [isPendingDelete, startTransitionDelete] = useTransition()
  const [isPendingLogout, startTransitionLogout] = useTransition()
  const { data } = useGetCurrentSessionQuery()

  const currentUserId = data?.getCurrentSession.userId

  const [deleteAccount, { loading: isDeleting }] = useDeleteUserByIdMutation({
    onCompleted(data) {
      startTransitionDelete(() => {
        if (data.deleteUserById.rights.includes(Role.Author)) {
          router.push(ADMIN_PAGES.AUTHORS)
        } else if (data.deleteUserById.rights.includes(Role.User)) {
          router.push(ADMIN_PAGES.USERS)
        } else {
          router.push(PUBLIC_PAGES.HOME)
        }
      })
    },
    onError(err) {
      toast.error(err.message)
    },
  })

  const [logOutAndDelete, { loading: isLoggingOut }] =
    useDeleteUserAndLogoutMutation({
      onCompleted() {
        startTransitionLogout(() => {
          router.push(PUBLIC_PAGES.LOGIN)
        })
      },
      onError(err) {
        toast.error(err.message)
      },
    })

  const deleteUser = () => {
    if (id === currentUserId) {
      logOutAndDelete()
    } else {
      deleteAccount({ variables: { userId: id } })
    }
  }

  const isLoading =
    isDeleting || isLoggingOut || isPendingDelete || isPendingLogout

  return {
    deleteUser,
    isLoading,
  }
}

export default useDeleteAccount
