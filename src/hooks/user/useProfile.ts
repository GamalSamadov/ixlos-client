import { toast } from 'sonner'

import { useFindProfileQuery } from '@/graphql/generated/output'
import { transformUserToState } from '@/utils/transform-user-to-state'

export const useProfile = () => {
  const { data, loading, error } = useFindProfileQuery()

  if (error) {
    toast.error(error.message)
    return null
  }

  const profile = data?.findProfile

  const userState = profile ? transformUserToState(profile) : null

  return {
    user: data?.findProfile,
    isLoading: loading,
  }
}
