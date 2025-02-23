'use client'

import { useAtomValue } from 'jotai'

import { createUserCurrentPageAtom } from '@/shared/atoms/create-user-current-page.atom'

import { CreateUserBio, CreateUserAvatar, RegisterForm } from './forms'

export const Register = () => {
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
