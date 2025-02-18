import Header from '@/widgets/shared/ui/header/Header/Header'
import Profile from '@/widgets/user/ui/profile/Profile'

import getProfile from '../actions/get-profile'

const ProfilePage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params
  const { profile, loading } = await getProfile(id)

  return (
    <>
      <Header />
      <Profile profile={profile} loading={loading} />
    </>
  )
}

export default ProfilePage
