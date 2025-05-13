'use client'

import clsx from 'clsx'
import { useTranslations } from 'next-intl'

import { Button, CustomIcon, Vector } from '@/shared/ui'

import styles from './TafseersCard.module.scss'

export const TafseersCard = () => {
  const t = useTranslations('tafseer.tafseersCard')
  return (
    <div className={styles['card-container']}>
      <div className={clsx(styles.card, 'bg_light_blue_gradient')}>
        <div className={styles['card-content']}>
          <div className={styles['card-title']}>{t('title')}</div>
          <div className={styles['card-description']}>{t('description')}</div>
          <div className={styles['card-button']}>
            <Button variant="link">
              <CustomIcon size={20} variant="arrow-right" />
            </Button>
          </div>
        </div>

        <div className={styles['card-bg-image']}>
          <Vector size={300} variant="mosque-4" />
        </div>
      </div>
    </div>
  )
}
