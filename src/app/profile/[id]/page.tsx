import { getProfileById } from '@/app/shared/actions'
import { Header } from '@/widgets/shared/ui'
import { Profile } from '@/widgets/user/ui'

const ProfilePage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params
  const { profile, loading } = await getProfileById(id)

  return (
    <>
      <Header />
      <Profile profile={profile} loading={loading} />
    </>
  )
}

export default ProfilePage
