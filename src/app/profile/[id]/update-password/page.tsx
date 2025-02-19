import UpdatePasswordForm from '@/widgets/shared/ui/profile/UpdatePasswordForm'

import getProfile from '../../actions/get-profile'

const UpdatePasswordPage = async ({
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

export default UpdatePasswordPage
