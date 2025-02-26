import { getProfileById } from '@/widgets/shared/actions'

import { EditProfileInfoForm } from './form'

export const EditInfo = async ({ id }: { id: string }) => {
  const { profile } = await getProfileById(id)
  return <EditProfileInfoForm profile={profile} />
}
