import { getAuth } from '@/shared/utils/auth/get-auth'
import Header from '@/widgets/shared/ui/header/Header/Header'

const DashboardPage = async () => {
  const user = await getAuth()
  return <Header user={user} />
}

export default DashboardPage
