import { Role } from '@/graphql/generated/output'

export type TProtectUserData = {
  id: string
  rights: Role[]
}
