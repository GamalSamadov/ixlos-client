import { ArrowDown } from 'lucide-react'
import { useTranslations } from 'next-intl'

import { Button } from '@/shared/ui'

import styles from './ShowMore.module.scss'

interface IShowMore {
  onClick: (() => void) | undefined
  loading?: boolean
  title: string
}

export function ShowMore({ loading, onClick, title }: IShowMore) {
  const t = useTranslations('loading')
  return (
    <div className={styles.showMore}>
      <Button variant="link" onClick={onClick} disabled={loading}>
        {loading ? (
          t('title')
        ) : (
          <>
            <ArrowDown />
            {title}
          </>
        )}
      </Button>
    </div>
  )
}
