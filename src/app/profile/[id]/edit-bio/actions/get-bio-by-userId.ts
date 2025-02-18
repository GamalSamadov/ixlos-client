import {
  GetBioByUserIdDocument,
  GetBioByUserIdQuery,
} from '@/graphql/generated/output'
import { apolloClientServer } from '@/shared/libs/apollo-client/apollo-client-server'

const getBioByUserId = async (userId: string) => {
  const { query } = await apolloClientServer()

  const { data, loading } = await query<GetBioByUserIdQuery>({
    query: GetBioByUserIdDocument,
    variables: {
      userId,
    },
  })

  const bio = data.getBioByUserId

  return { bio, loading }
}

export default getBioByUserId
