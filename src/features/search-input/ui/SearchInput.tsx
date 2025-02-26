'use client'

import { SearchIcon } from 'lucide-react'
import React from 'react'

import { useSearchTerm } from '@/shared/hooks/useSearchTerm'

import styles from './SearchInput.module.scss'

interface Props {
  route: string
  name: string
  placeholder: string
  isFullWidth?: boolean
}

export const SearchInput = ({
  route,
  name,
  placeholder,
  isFullWidth = false,
}: Props) => {
  const { value, handleSearch, error } = useSearchTerm(route)
  return (
    <div
      className={
        isFullWidth ? styles.input_container_full_width : styles.input_container
      }
    >
      <span className={isFullWidth ? styles.icon_full : styles.icon}>
        <SearchIcon />
      </span>
      <input
        className={isFullWidth ? styles.input_full : styles.input}
        name={name}
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={handleSearch}
      />
      {error && <p className={styles.error}>{error}</p>}
    </div>
  )
}
