import { useApolloClient } from '@apollo/client'
import { useEffect, useState } from 'react'

import {
  GetUsernameByUsernameDocument,
  GetUsernameByUsernameQuery,
} from '@/graphql/generated/output'
import { useDebounce } from '@/shared/hooks/useDebounce'

export const useCheckUsername = (username: string) => {
  const debouncedUsername = useDebounce(username, 300)
  const { query } = useApolloClient()
  const [existingUsername, setExistingUsername] = useState('')

  useEffect(() => {
    const checkUsername = async () => {
      const { data } = await query<GetUsernameByUsernameQuery>({
        query: GetUsernameByUsernameDocument,
        variables: {
          username: debouncedUsername,
        },
      })
      setExistingUsername(data.getUsernameByUsername)
    }

    checkUsername()
  }, [debouncedUsername, query])

  return { existingUsername }
}
