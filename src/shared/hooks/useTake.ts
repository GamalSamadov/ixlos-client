import { usePathname, useSearchParams } from 'next/navigation'
import { useRouter } from 'nextjs-toploader/app'
import { useEffect, useState } from 'react'

import { formUrlQuery, removeKeysFromUrlQuey } from '@/shared/utils/url'

export const useTake = (route: string) => {
  const initialTake = 10
  const searchParams = useSearchParams()
  const takeQuery = searchParams.get('take') || String(initialTake)

  const [take, setTake] = useState(takeQuery)

  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    if (take) {
      const newUrl = formUrlQuery({
        params: searchParams.toString(),
        key: 'take',
        value: take,
      })
      router.push(newUrl, { scroll: false })
    } else {
      if (pathname === route) {
        const newUrl = removeKeysFromUrlQuey({
          params: searchParams.toString(),
          keysToRemove: ['searchTerm'],
        })

        router.push(newUrl)
      }
    }
  }, [take, searchParams, router, pathname, route])

  const handleTake = () => {
    setTake(String(Number(take) + initialTake))
  }

  const resetTake = () => {
    setTake(String(initialTake))
  }

  return { handleTake, resetTake }
}
