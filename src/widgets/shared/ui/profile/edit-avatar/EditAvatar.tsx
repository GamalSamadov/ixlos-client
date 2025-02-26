import { getProfileById } from '@/widgets/shared/actions'

import { EditAvatarForm } from './form'

export const EditAvatar = async ({ id }: { id: string }) => {
  const { profile } = await getProfileById(id)
  return <EditAvatarForm profile={profile} />
}
