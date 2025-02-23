import { getProfileById } from '@/app/shared/actions/get-profile-by-id'
import { UpdatePasswordForm } from '@/widgets/shared/ui'

const ProfileUpdatePasswordPage = async ({
  params,
}: {
  params: Promise<{ id: string }>
}) => {
  const { id } = await params
  const { profile } = await getProfileById(id)
  return (
    <>
      <UpdatePasswordForm profile={profile} />
    </>
  )
}

export default ProfileUpdatePasswordPage
