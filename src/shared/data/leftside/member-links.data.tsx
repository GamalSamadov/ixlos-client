import OpenBook from '@/shared/ui/icons/OpenBook'

export const MEMBER_LINKS = [
  {
    id: 0,
    label: 'leftside.links.books',
    href: '/books',
    icon: <OpenBook size={30} />,
  },
]

export type TMemberLinks = typeof MEMBER_LINKS
