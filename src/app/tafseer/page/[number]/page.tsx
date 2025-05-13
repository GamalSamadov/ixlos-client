import { Header } from '@/widgets/shared/ui'
import { PageDetails } from '@/widgets/tafseer/ui/page-details'

import { getPageAyahs } from './actions/get-page-ayahs'

const TafseerPageNumber = async ({
  params,
}: {
  params: Promise<{ number: string }>
}) => {
  const { number } = await params
  const { pageDetails } = await getPageAyahs(number)

  return (
    <>
      <Header />
      <PageDetails pageDetails={pageDetails} />
    </>
  )
}

export default TafseerPageNumber
