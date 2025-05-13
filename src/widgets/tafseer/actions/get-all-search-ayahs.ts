import {
  SearchAyahByTextDocument,
  SearchAyahByTextQuery,
} from '@/graphql/generated/output'
import { apolloClientServer } from '@/shared/libs/apollo-client/apollo-client-server'
import { ISearchParams } from '@/shared/types/search-params'

export const getAllSearchAyahs = async ({ searchParams }: ISearchParams) => {
  const { take = '10', searchTerm = '' } = await searchParams
  const { query } = await apolloClientServer()

  try {
    const { data, loading } = await query<SearchAyahByTextQuery>({
      query: SearchAyahByTextDocument,
      variables: {
        searchTerm,
        pagination: {
          take: Number(take),
        },
      },
    })

    const ayahs = data.searchAyahByText.ayahs
    const hasMore = data.searchAyahByText.hasMore
    const total = data.searchAyahByText.total

    return { ayahs, hasMore, loading, total }
  } catch {
    return { ayahs: null, hasMore: false, loading: false, total: 0 }
  }
}
