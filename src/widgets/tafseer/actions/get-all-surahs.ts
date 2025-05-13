import { notFound } from 'next/navigation'

import {
  GetAllSurahsDocument,
  GetAllSurahsQuery,
} from '@/graphql/generated/output'
import { apolloClientServer } from '@/shared/libs/apollo-client/apollo-client-server'
import { ISearchParams } from '@/shared/types/search-params'

export const getAllSurahs = async ({ searchParams }: ISearchParams) => {
  const { take = '10' } = await searchParams
  const { query } = await apolloClientServer()

  try {
    const { data, loading } = await query<GetAllSurahsQuery>({
      query: GetAllSurahsDocument,
      variables: {
        pagination: {
          take: Number(take),
        },
      },
    })

    const surahs = data.getAllSurahs

    return { surahs, loading }
  } catch {
    return notFound()
  }
}
