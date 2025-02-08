import { BookText } from 'lucide-react'

import { PUBLIC_PAGES } from '@/shared/config/pages/public.config'
import Icon from '@/shared/ui/icons/Icon'

export const ADMIN_LINKS = [
  {
    id: 0,
    label: 'leftside.links.tafseer',
    href: PUBLIC_PAGES.HOME,
    icon: <BookText size={30} />,
  },
  {
    id: 1,
    label: 'leftside.links.books',
    href: PUBLIC_PAGES.BOOKS,
    icon: <Icon variant="book-open-gray" size={30} />,
  },
  {
    id: 2,
    label: 'leftside.links.settings',
    href: PUBLIC_PAGES.SETTINGS,
    icon: <Icon variant="settings" size={30} />,
  },
]

export type TAdminLinks = typeof ADMIN_LINKS
