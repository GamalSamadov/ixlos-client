import { ISearchParams } from '@/shared/types/search-params'
import { getAuth } from '@/shared/utils/auth/get-auth'
import { Header } from '@/widgets/shared/ui'
import { getAllSurahs, getAllSearchAyahs } from '@/widgets/tafseer/actions'
import { ITafseerMainData } from '@/widgets/tafseer/types/main-tafseer.type'
import { MainTafseer } from '@/widgets/tafseer/ui'

const TafseerPage = async ({ searchParams }: ISearchParams) => {
  const { surahs, loading: loadingSurahs } = await getAllSurahs({
    searchParams,
  })

  const {
    ayahs,
    hasMore: hasMoreAyahs,
    loading: loadingAyahs,
    total: totalAyahs,
  } = await getAllSearchAyahs({ searchParams })

  const user = await getAuth()

  const isAdmin = user?.isAdmin

  const data: ITafseerMainData = {
    ayahsData: {
      ayahs,
      hasMoreAyahs,
      loadingAyahs,
      totalAyahs,
    },
    surahsData: {
      surahs,
      loadingSurahs,
    },
    isAdmin,
  }

  return (
    <>
      <Header />
      <MainTafseer {...data} />
    </>
  )
}

export default TafseerPage
