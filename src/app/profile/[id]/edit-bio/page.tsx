import EditBio from '@/widgets/shared/ui/bio/edit-bio/EditBio'

import getBioByUserId from './actions/get-bio-by-userId'

const BioEditPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params
  const { bio } = await getBioByUserId(id)

  return (
    <>
      <EditBio bio={bio} />
    </>
  )
}

export default BioEditPage
