import { BookText } from 'lucide-react'

import { PUBLIC_PAGES } from '@/shared/config/pages/public.config'
import OpenBook from '@/shared/ui/icons/OpenBook'

export const USER_LINKS = [
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
    icon: <OpenBook size={30} />,
  },
]

export type TUserLinks = typeof USER_LINKS
