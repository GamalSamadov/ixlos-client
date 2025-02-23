import { getProfileById } from '@/app/shared/actions'
import { EditProfileInfoForm } from '@/widgets/shared/ui'

const ProfileEditInfo = async ({
  params,
}: {
  params: Promise<{ id: string }>
}) => {
  const { id } = await params
  const { profile } = await getProfileById(id)
  return (
    <>
      <EditProfileInfoForm profile={profile} />
    </>
  )
}

export default ProfileEditInfo
