import { USER_PAGES } from '@/shared/config/pages/user.config'

export const MENUS = [
  {
    id: 1,
    title: 'profile',
    icon: 'person',
    href: USER_PAGES.PROFILE,
  },
  {
    id: 'logout',
    title: 'logout',
    icon: 'sign-out',
    href: '',
  },
]
