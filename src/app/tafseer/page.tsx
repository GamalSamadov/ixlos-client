import { ISearchParams } from '@/shared/types/search-params'
import { Header } from '@/widgets/shared/ui'
import { MainTafseer } from '@/widgets/tafseer/ui'

const TafseerPage = async ({ searchParams }: ISearchParams) => {
  return (
    <>
      <Header />
      <MainTafseer searchParams={searchParams} />
    </>
  )
}

export default TafseerPage
