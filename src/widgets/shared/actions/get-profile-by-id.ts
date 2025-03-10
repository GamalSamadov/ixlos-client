import { notFound } from 'next/navigation'

import {
  GetProfileByIdDocument,
  GetProfileByIdQuery,
} from '@/graphql/generated/output'
import { apolloClientServer } from '@/shared/libs/apollo-client/apollo-client-server'

export const getProfileById = async (userId: string) => {
  const { query } = await apolloClientServer()

  try {
    const { data, loading } = await query<GetProfileByIdQuery>({
      query: GetProfileByIdDocument,
      variables: {
        id: userId,
      },
    })

    const profile = data.getProfileById

    return { profile, loading }
  } catch {
    return notFound()
  }
}
