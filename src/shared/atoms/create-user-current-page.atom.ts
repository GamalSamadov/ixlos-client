import { atom } from 'jotai'

export type TCreateUserAtom = 'create-user' | 'create-avatar' | 'create-bio'

export const createUserCurrentPageAtom = atom<TCreateUserAtom>('create-user')
