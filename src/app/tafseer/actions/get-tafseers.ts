import {
  GetAllTafseersDocument,
  GetAllTafseersQuery,
} from '@/graphql/generated/output'
import { apolloClientServer } from '@/shared/libs/apollo-client/apollo-client-server'
import { ISearchParams } from '@/shared/types/search-params'

export const getAllTafseers = async ({ searchParams }: ISearchParams) => {
  const { take = '10', searchTerm = '' } = await searchParams

  const { query } = await apolloClientServer()

  const { data, loading } = await query<GetAllTafseersQuery>({
    query: GetAllTafseersDocument,
    variables: {
      searchTerm,
      pagination: {
        take: Number(take),
      },
    },
  })

  const tafseers = data.getAllTafseers.tafseers
  const hasMore = data.getAllTafseers.hasMore

  return { tafseers, hasMore, loading }
}
