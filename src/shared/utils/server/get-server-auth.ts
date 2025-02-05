import {
  FindProfileQuery,
  FindProfileDocument,
} from '@/graphql/generated/output'
import { apolloClientServer } from '@/shared/libs/apollo-client/apollo-client-server'

import {
  transformUserToState,
  TUserDataState,
} from '../transform-user-to-state'

export const getServerAuth = async (): Promise<TUserDataState | null> => {
  const { query } = await apolloClientServer()

  try {
    const { data } = await query<FindProfileQuery>({
      query: FindProfileDocument,
    })

    const user = data?.findProfile

    if (!user) {
      return null
    }

    return transformUserToState(user)
  } catch {
    return null
  }
}
