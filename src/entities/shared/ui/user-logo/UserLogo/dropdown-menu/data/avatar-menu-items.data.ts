import { PUBLIC_PAGES } from '@/shared/config/pages/public.config'
import { USER_PAGES } from '@/shared/config/pages/user.config'

export const MENUS = [
  {
    id: 1,
    title: 'profile',
    icon: 'person',
    href: USER_PAGES.PROFILE,
  },
  {
    id: 2,
    title: 'settings',
    icon: 'settings',
    href: PUBLIC_PAGES.SETTINGS,
  },
  {
    id: 'logout',
    title: 'logout',
    icon: 'sign-out',
    href: '',
  },
]
