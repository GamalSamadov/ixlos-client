import { useApolloClient } from '@apollo/client'
import { useEffect, useState } from 'react'

import {
  GetEmailByEmailDocument,
  GetEmailByEmailQuery,
} from '@/graphql/generated/output'
import { useDebounce } from '@/shared/hooks/useDebounce'

export const useCheckEmail = (email: string) => {
  const debouncedEmail = useDebounce(email, 300)
  const { query } = useApolloClient()
  const [existingEmail, setExistingEmail] = useState('')

  useEffect(() => {
    const checkEmail = async () => {
      const { data } = await query<GetEmailByEmailQuery>({
        query: GetEmailByEmailDocument,
        variables: {
          email: debouncedEmail,
        },
      })
      setExistingEmail(data.getEmailByEmail)
    }

    checkEmail()
  }, [debouncedEmail, query])

  return { existingEmail }
}
