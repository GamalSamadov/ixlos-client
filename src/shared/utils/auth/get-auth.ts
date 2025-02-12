import {
  GetCurrentSessionDocument,
  GetCurrentSessionQuery,
} from '@/graphql/generated/output'
import { apolloClientServer } from '@/shared/libs/apollo-client/apollo-client-server'

import {
  transformUserToState,
  TUserDataState,
} from '../user/transform-user-to-state'

export const getAuth = async (): Promise<TUserDataState | null> => {
  const { query } = await apolloClientServer()

  try {
    const { data } = await query<GetCurrentSessionQuery>({
      query: GetCurrentSessionDocument,
    })

    const session = data?.getCurrentSession

    if (!session) {
      return null
    }

    return transformUserToState(session)
  } catch {
    return null
  }
}
