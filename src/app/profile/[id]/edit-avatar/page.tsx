import getProfileById from '@/app/shared/actions/get-profile-by-id'
import EditAvatarForm from '@/widgets/shared/ui/profile/EditAvatarForm'

const ProfileEditAvatarPage = async ({
  params,
}: {
  params: Promise<{ id: string }>
}) => {
  const { id } = await params
  const { profile } = await getProfileById(id)
  return (
    <>
      <EditAvatarForm profile={profile} />
    </>
  )
}

export default ProfileEditAvatarPage
