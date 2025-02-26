import { useSearchParams, usePathname, useRouter } from 'next/navigation'
import { useTranslations } from 'next-intl'
import { useState, useEffect } from 'react'

import { useDebounce } from '@/shared/hooks/useDebounce'
import { formUrlQuery, removeKeysFromUrlQuey } from '@/shared/utils/url'

export const useSearchTerm = (route: string) => {
  const searchParams = useSearchParams()
  const search = searchParams.get('searchTerm') || ''

  const [searchTerm, setSearchTerm] = useState(search)
  const [error, setError] = useState('')

  const debounceSearchTerm = useDebounce(searchTerm, 300)
  const router = useRouter()
  const pathname = usePathname()
  const t = useTranslations('errors')

  useEffect(() => {
    if (debounceSearchTerm) {
      if (debounceSearchTerm.length < 5) {
        setError(t('lessThen5'))
      } else {
        setError('')
        const newUrl = formUrlQuery({
          params: searchParams.toString(),
          key: 'searchTerm',
          value: debounceSearchTerm,
        })
        router.push(newUrl, { scroll: false })
      }
    } else {
      setError('')
      if (pathname === route) {
        const newUrl = removeKeysFromUrlQuey({
          params: searchParams.toString(),
          keysToRemove: ['searchTerm'],
        })

        router.push(newUrl, { scroll: false })
      }
    }
  }, [debounceSearchTerm, searchParams, router, pathname, route, t])

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
  }

  return { value: searchTerm, handleSearch, error }
}
