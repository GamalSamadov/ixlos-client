import { BookText, SignatureIcon, Users2 } from 'lucide-react'

import { ADMIN_PAGES } from '@/shared/config/pages/admin.config'
import { PUBLIC_PAGES } from '@/shared/config/pages/public.config'
import CustomIcon from '@/shared/ui/icons/CustomIcon'

export const ADMIN_LINKS = [
  {
    id: 0,
    label: 'leftside.links.authors',
    href: ADMIN_PAGES.AUTHORS,
    icon: <SignatureIcon size={30} />,
  },
  {
    id: 1,
    label: 'leftside.links.users',
    href: ADMIN_PAGES.USERS,
    icon: <Users2 size={30} />,
  },
  {
    id: 2,
    label: 'leftside.links.tafseer',
    href: PUBLIC_PAGES.HOME,
    icon: <BookText size={30} />,
  },
  {
    id: 3,
    label: 'leftside.links.books',
    href: PUBLIC_PAGES.BOOKS,
    icon: <CustomIcon variant="book-open-gray" size={30} />,
  },
  {
    id: 4,
    label: 'leftside.links.settings',
    href: PUBLIC_PAGES.SETTINGS,
    icon: <CustomIcon variant="settings" size={30} />,
  },
]

export type TAdminLinks = typeof ADMIN_LINKS
