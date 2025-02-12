import {
  GetProfileAvatarDocument,
  GetProfileAvatarQuery,
} from '@/graphql/generated/output'
import { apolloClientServer } from '@/shared/libs/apollo-client/apollo-client-server'

export const getProfileAvatar = async () => {
  const { query } = await apolloClientServer()

  try {
    const { data, loading } = await query<GetProfileAvatarQuery>({
      query: GetProfileAvatarDocument,
    })

    return { data: data.getProfile, loading }
  } catch {
    return {
      data: null,
      loading: false,
    }
  }
}
