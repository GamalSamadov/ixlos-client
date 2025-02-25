import { atom } from 'jotai'

import { Role } from '@/graphql/generated/output'

export const currentUserRights = atom([Role.User])
