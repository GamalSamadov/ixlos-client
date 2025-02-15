'use server'

import {
  GetProfileAvatarDocument,
  GetProfileAvatarQuery,
} from '@/graphql/generated/output'

import { apolloClientServer } from '../libs/apollo-client/apollo-client-server'

const getProfileAvatar = async () => {
  const { query } = await apolloClientServer()

  const { data, loading } = await query<GetProfileAvatarQuery>({
    query: GetProfileAvatarDocument,
  })

  const avatar = data.getProfile.avatar
  const username = data.getProfile.username
  const displayName = data.getProfile.displayName

  return { loading, avatar, username, displayName }
}

export default getProfileAvatar
