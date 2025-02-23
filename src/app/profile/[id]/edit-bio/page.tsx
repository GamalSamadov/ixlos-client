import { EditBio } from '@/widgets/shared/ui'

import { getBioByUserId } from './actions'

const ProfileBioEditPage = async ({
  params,
}: {
  params: Promise<{ id: string }>
}) => {
  const { id } = await params
  const { bio } = await getBioByUserId(id)

  return (
    <>
      <EditBio bio={bio} />
    </>
  )
}

export default ProfileBioEditPage
