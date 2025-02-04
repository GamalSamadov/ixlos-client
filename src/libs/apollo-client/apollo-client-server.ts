import { cookies } from 'next/headers'

import { createServerClient } from './apollo-client'

// Server-side client
export const apolloClientServer = async () => {
  const cookieStore = cookies()
  const cookieString = cookieStore.toString()

  return createServerClient(cookieString)
}
