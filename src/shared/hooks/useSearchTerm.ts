import { useSearchParams, usePathname, useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'

import { useDebounce } from '@/shared/hooks/useDebounce'
import { formUrlQuery, removeKeysFromUrlQuey } from '@/shared/utils/url'

export const useSearchTerm = (route: string) => {
  const searchParams = useSearchParams()
  const search = searchParams.get('searchTerm') || ''
  const [searchTerm, setSearchTerm] = useState(search)
  const debounceSearchTerm = useDebounce(searchTerm, 300)
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    if (debounceSearchTerm) {
      const newUrl = formUrlQuery({
        params: searchParams.toString(),
        key: 'searchTerm',
        value: debounceSearchTerm,
      })
      router.push(newUrl, { scroll: false })
    } else {
      if (pathname === route) {
        const newUrl = removeKeysFromUrlQuey({
          params: searchParams.toString(),
          keysToRemove: ['searchTerm'],
        })

        router.push(newUrl, { scroll: false })
      }
    }
  }, [debounceSearchTerm, searchParams, router, pathname, route])

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
  }

  return { value: searchTerm, handleSearch }
}
