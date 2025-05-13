import { notFound } from 'next/navigation'

import {
  GetAyahsByPageNumberDocument,
  GetAyahsByPageNumberQuery,
} from '@/graphql/generated/output'
import { apolloClientServer } from '@/shared/libs/apollo-client/apollo-client-server'

export const getPageAyahs = async (pageNumber: string) => {
  const { query } = await apolloClientServer()
  try {
    const { data, loading } = await query<GetAyahsByPageNumberQuery>({
      query: GetAyahsByPageNumberDocument,
      variables: {
        data: { pageNumber: parseInt(pageNumber) },
      },
    })

    const pageDetails = data.getAyahsByPageNumber

    return { pageDetails, loading }
  } catch {
    return notFound()
  }
}
