import { BookText } from 'lucide-react'

import { PUBLIC_PAGES } from '@/shared/config/pages/public.config'
import CustomIcon from '@/shared/ui/icons/CustomIcon'

export const MEMBER_LINKS = [
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
    icon: <CustomIcon variant="book-open-gray" size={30} />,
  },
  {
    id: 2,
    label: 'leftside.links.settings',
    href: PUBLIC_PAGES.SETTINGS,
    icon: <CustomIcon variant="settings" size={30} />,
  },
]

export type TMemberLinks = typeof MEMBER_LINKS
