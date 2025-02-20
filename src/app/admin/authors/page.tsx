import { ISearchParams } from '@/shared/types/search-params'
import AuthorsWidget from '@/widgets/admin/ui/authors'
import Header from '@/widgets/shared/ui/header/Header/Header'

import getAllAuthors from './actions/get-authors'

const AdminAuthorsPage = async ({ searchParams }: ISearchParams) => {
  const { authors, hasMore, loading } = await getAllAuthors({ searchParams })
  return (
    <>
      <Header />
      <AuthorsWidget authors={authors} hasMore={hasMore} loading={loading} />
    </>
  )
}

export default AdminAuthorsPage
