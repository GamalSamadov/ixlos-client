import { ArrowUp } from 'lucide-react'
import { useTranslations } from 'next-intl'

import Button from '@/shared/ui/buttons/Button'

import styles from './Collapse.module.scss'

interface ICollapse {
  onClick: (() => void) | undefined
  loading?: boolean
  title: string
}

export function Collapse({ loading, onClick, title }: ICollapse) {
  const t = useTranslations('loading')
  return (
    <div className={styles.collapse}>
      <Button variant="link" onClick={onClick} disabled={loading}>
        {loading ? (
          t('title')
        ) : (
          <>
            <ArrowUp />
            {title}
          </>
        )}
      </Button>
    </div>
  )
}
