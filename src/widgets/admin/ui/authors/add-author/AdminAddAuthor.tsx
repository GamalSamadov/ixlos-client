'use client'

import { useAtomValue } from 'jotai'

import { createUserCurrentPageAtom } from '@/shared/atoms/create-user-current-page.atom'

import { AddAuthorAvatarForm, AddAuthorBio, AddAuthorForm } from './forms'

export const AdminAddAuthor = () => {
  const currentPage = useAtomValue(createUserCurrentPageAtom)

  if (currentPage === 'create-user') {
    return <AddAuthorForm />
  }

  if (currentPage === 'create-avatar') {
    return <AddAuthorAvatarForm />
  }

  if (currentPage === 'create-bio') {
    return <AddAuthorBio />
  }
}
