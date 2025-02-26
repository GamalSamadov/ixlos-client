import { Header } from '@/widgets/shared/ui'
import { Profile } from '@/widgets/user/ui'

const ProfilePage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params

  return (
    <>
      <Header />
      <Profile id={id} />
    </>
  )
}

export default ProfilePage
