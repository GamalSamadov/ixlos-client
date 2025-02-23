import { ISearchParams } from '@/shared/types/search-params'
import { Authors } from '@/widgets/admin/ui'
import { Header } from '@/widgets/shared/ui'

import getAllAuthors from './actions/get-authors'

const AdminAuthorsPage = async ({ searchParams }: ISearchParams) => {
  const { authors, hasMore, loading } = await getAllAuthors({ searchParams })
  return (
    <>
      <Header />
      <Authors authors={authors} hasMore={hasMore} loading={loading} />
    </>
  )
}

export default AdminAuthorsPage
