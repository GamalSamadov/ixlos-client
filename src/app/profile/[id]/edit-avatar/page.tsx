import { EditAvatar } from '@/widgets/shared/ui/profile/edit-avatar'

const ProfileEditAvatarPage = async ({
  params,
}: {
  params: Promise<{ id: string }>
}) => {
  const { id } = await params
  return (
    <>
      <EditAvatar id={id} />
    </>
  )
}

export default ProfileEditAvatarPage
