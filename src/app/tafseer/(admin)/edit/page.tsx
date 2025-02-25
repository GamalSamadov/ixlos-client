import { getAllTafseers } from '@/app/tafseer/actions/get-tafseers'
import { BackButton } from '@/features/back-button/BackButton'
import { PUBLIC_PAGES } from '@/shared/config/pages'
import { ISearchParams } from '@/shared/types/search-params'
import { Header } from '@/widgets/shared/ui'
import { EditTafseer } from '@/widgets/tafseer/ui/edit'

const AdminTafseerEditPage = async ({ searchParams }: ISearchParams) => {
  const { tafseers, hasMore, loading } = await getAllTafseers({ searchParams })
  return (
    <>
      <Header />
      <div className="mb-4">
        <BackButton link={PUBLIC_PAGES.HOME} />
      </div>
      <EditTafseer tafseers={tafseers} hasMore={hasMore} loading={loading} />
    </>
  )
}

export default AdminTafseerEditPage
