import EditProfileInfoForm from '@/widgets/shared/ui/profile/EditInfoForm'

import getProfile from '../../actions/get-profile'

const ProfileEditInfo = async ({
  params,
}: {
  params: Promise<{ id: string }>
}) => {
  const { id } = await params
  const { profile } = await getProfile(id)
  return (
    <>
      <EditProfileInfoForm profile={profile} />
    </>
  )
}

export default ProfileEditInfo
