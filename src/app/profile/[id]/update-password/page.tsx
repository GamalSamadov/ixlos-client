import UpdatePasswordForm from '@/widgets/shared/ui/profile/UpdatePasswordForm'

import getProfile from '../../../shared/actions/get-profile-by-id'

const ProfileUpdatePasswordPage = async ({
  params,
}: {
  params: Promise<{ id: string }>
}) => {
  const { id } = await params
  const { profile } = await getProfile(id)
  return (
    <>
      <UpdatePasswordForm profile={profile} />
    </>
  )
}

export default ProfileUpdatePasswordPage
