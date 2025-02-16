import { SearchIcon } from 'lucide-react'
import React from 'react'

import { useSearchTerm } from '@/shared/hooks/useSearchTerm'

import styles from './SearchInput.module.scss'

interface Props {
  title: string
  route: string
  name: string
  type: string
  placeholder: string
}

const SearchInput = ({ title, route, name, type, placeholder }: Props) => {
  const { value, handleSearch } = useSearchTerm(route)
  return (
    <div className={styles.container}>
      <h1 className="hidden text-lg font-bold md:block">{title}</h1>
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
    </div>
  )
}

export default SearchInput
