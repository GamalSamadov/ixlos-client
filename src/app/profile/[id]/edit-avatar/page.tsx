import EditAvatarForm from '@/widgets/shared/ui/profile/EditAvatarForm'

import getProfile from '../../actions/get-profile-by-id'

const ProfileEditAvatarPage = async ({
  params,
}: {
  params: Promise<{ id: string }>
}) => {
  const { id } = await params
  const { profile } = await getProfile(id)
  return (
    <>
      <EditAvatarForm profile={profile} />
    </>
  )
}

export default ProfileEditAvatarPage
