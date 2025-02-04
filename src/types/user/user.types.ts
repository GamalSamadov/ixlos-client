import { Role } from '@/graphql/generated/output'

export interface ILoginFormData {
  login: string
  password: string
}

export interface IRegisterFormData {
  email: string
  username: string
  password: string
}

export type TProtectUserData = {
  id: string
  rights: Role[]
}
