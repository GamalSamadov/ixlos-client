import { EditInfo } from '@/widgets/shared/ui'

const ProfileEditInfo = async ({
  params,
}: {
  params: Promise<{ id: string }>
}) => {
  const { id } = await params
  return (
    <>
      <EditInfo id={id} />
    </>
  )
}

export default ProfileEditInfo
