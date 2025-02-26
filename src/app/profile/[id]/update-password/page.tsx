import { UpdatePassword } from '@/widgets/shared/ui'

const ProfileUpdatePasswordPage = async ({
  params,
}: {
  params: Promise<{ id: string }>
}) => {
  const { id } = await params

  return (
    <>
      <UpdatePassword id={id} />
    </>
  )
}

export default ProfileUpdatePasswordPage
