import {
  FindProfileDocument,
  FindProfileQuery,
} from '@/graphql/generated/output'
import { apolloClientServer } from '@/libs/apollo-client'

const DashboardPage = async () => {
  const { query } = await apolloClientServer()

  const { data } = await query<FindProfileQuery>({
    query: FindProfileDocument,
  })

  console.log(data.findProfile)

  return <div>DashboardPage</div>
}

export default DashboardPage
