'use client'

import { SearchInput } from '@/features/search-input'
import { PUBLIC_PAGES } from '@/shared/config/pages/public.config'

import styles from './SearchTafseer.module.scss'

export const SearchTafseer = () => {
  return (
    <div className={styles['search-container']}>
      <SearchInput
        route={PUBLIC_PAGES.HOME}
        name="search-tafseer"
        placeholder="Search tafseer"
        isFullWidth
      />

      <h2>Barcha suralar</h2>
    </div>
  )
}
