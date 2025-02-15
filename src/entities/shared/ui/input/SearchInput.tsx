import { SearchIcon } from 'lucide-react'
import React from 'react'

import { useSearchTerm } from '@/shared/hooks/useSearchTerm'

import styles from './SearchInput.module.scss'

interface Props {
  route: string
  name: string
  type: string
  placeholder: string
}

const SearchInput = ({ route, name, type, placeholder }: Props) => {
  const { value, handleSearch } = useSearchTerm(route)
  return (
    <div className={styles.input_container}>
      <span className={styles.icon}>
        <SearchIcon />
      </span>
      <input
        className={styles.input}
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={handleSearch}
      />
    </div>
  )
}

export default SearchInput
