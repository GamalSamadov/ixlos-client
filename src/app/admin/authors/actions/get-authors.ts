import {
  GetAllAuthorsQuery,
  GetAllAuthorsDocument,
} from '@/graphql/generated/output'
import { apolloClientServer } from '@/shared/libs/apollo-client/apollo-client-server'
import { ISearchParams } from '@/shared/types/search-params'

const getAllAuthors = async ({ searchParams }: ISearchParams) => {
  const { take = '10', searchTerm = '' } = await searchParams

  const { query } = await apolloClientServer()

  const { data, loading } = await query<GetAllAuthorsQuery>({
    query: GetAllAuthorsDocument,
    variables: {
      searchTerm,
      pagination: {
        take: Number(take),
      },
    },
  })

  const authors = data.getAllAuthors.authors
  const hasMore = data.getAllAuthors.hasMore

  return { authors, hasMore, loading }
}

export default getAllAuthors
