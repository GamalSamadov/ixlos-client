import LogoutIcon from '@/shared/ui/icons/Logout'
import OpenBook from '@/shared/ui/icons/OpenBook'
import Person from '@/shared/ui/icons/Person'

export const ADMIN_LINKS = [
  {
    id: 0,
    label: 'leftside.links.profile',
    href: '/profile',
    icon: <Person size={30} />,
  },
  {
    id: 1,
    label: 'leftside.links.books',
    href: '/books',
    icon: <OpenBook size={30} />,
  },
  {
    id: 'logout',
    label: 'leftside.links.logout',
    href: '/logout',
    icon: <LogoutIcon size={30} />,
  },
]

export type TAdminLinks = typeof ADMIN_LINKS
