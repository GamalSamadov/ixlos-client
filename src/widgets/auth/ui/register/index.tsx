'use client'

import { useAtomValue } from 'jotai'

import { createUserCurrentPageAtom } from '@/shared/atoms/create-user-current-page.atom'
import { RegisterForm } from '@/widgets/auth/ui/forms/RegisterForm'

import CreateUserAvatar from './create-user-avatar/CreateUserAvatar'
import CreateUserBio from './create-user-bio/CreateUserBio'

const Register = () => {
  const currentPage = useAtomValue(createUserCurrentPageAtom)

  if (currentPage === 'create-user') {
    return <RegisterForm />
  }

  if (currentPage === 'create-avatar') {
    return <CreateUserAvatar />
  }

  if (currentPage === 'create-bio') {
    return <CreateUserBio />
  }
}

export default Register
