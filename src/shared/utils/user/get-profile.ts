import {
  FindProfileAvatarDocument,
  FindProfileAvatarQuery,
} from '@/graphql/generated/output'
import { apolloClientServer } from '@/shared/libs/apollo-client/apollo-client-server'

export const getProfileAvatar = async () => {
  const { query } = await apolloClientServer()

  try {
    const { data, loading } = await query<FindProfileAvatarQuery>({
      query: FindProfileAvatarDocument,
    })

    return { data: data.findProfile, loading }
  } catch {
    return {
      data: null,
      loading: false,
    }
  }
}
