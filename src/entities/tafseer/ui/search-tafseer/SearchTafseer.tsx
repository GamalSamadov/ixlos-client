import { SearchInput } from '@/features/search-input'
import { PUBLIC_PAGES } from '@/shared/config/pages/public.config'

import styles from './SearchTafseer.module.scss'

export const SearchTafseer = ({
  result,
  placeholder,
}: {
  result: string
  placeholder: string
}) => {
  return (
    <div className={styles['search-container']}>
      <SearchInput
        route={PUBLIC_PAGES.HOME}
        name="search-tafseer"
        placeholder={placeholder}
        isFullWidth
      />

      <h2 className={styles.result}>{result}</h2>
    </div>
  )
}
