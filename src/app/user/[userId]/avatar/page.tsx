import getProfileById from '@/app/shared/actions/get-profile-by-id'
import AddAuthorAvatarForm from '@/widgets/admin/ui/authors/add-author/add-author-avatar/AddAuthorAvatarForm'

const AddAuthorAvatarPage = async ({
  params,
}: {
  params: Promise<{ userId: string }>
}) => {
  const { userId } = await params
  const { profile } = await getProfileById(userId)
  return (
    <>
      <AddAuthorAvatarForm profile={profile} />
    </>
  )
}

export default AddAuthorAvatarPage
