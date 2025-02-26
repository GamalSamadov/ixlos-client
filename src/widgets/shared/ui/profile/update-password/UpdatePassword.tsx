import { getProfileById } from '@/widgets/shared/actions'

import { UpdatePasswordForm } from './form'

export const UpdatePassword = async ({ id }: { id: string }) => {
  const { profile } = await getProfileById(id)

  return <UpdatePasswordForm profile={profile} />
}
