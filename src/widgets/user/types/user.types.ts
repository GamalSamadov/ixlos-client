import { Role } from '@/graphql/generated/output'

export type TProtectUserData = {
  userId: string
  rights: Role[]
}
