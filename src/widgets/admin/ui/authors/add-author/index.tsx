'use client'

import { useAtomValue } from 'jotai'

import { createUserCurrentPageAtom } from '@/shared/atoms/create-user-current-page.atom'

import AddAuthorAvatarForm from './add-author-avatar/AddAuthorAvatarForm'
import AddAuthorBio from './add-author-bio/AddAuthorBio'
import AddAuthorForm from './add-author-form/AddAuthorForm'

const AdminAddAuthor = () => {
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

export default AdminAddAuthor
