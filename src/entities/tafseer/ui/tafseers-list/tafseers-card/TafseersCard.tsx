import clsx from 'clsx'
import { getTranslations } from 'next-intl/server'

import { Button, CustomIcon, Vector } from '@/shared/ui'

import styles from './TafseersCard.module.scss'

export const TafseersCard = async () => {
  const t = await getTranslations('tafseer.tafseersCard')
  return (
    <div className={styles['card-container']}>
      <div className={styles['card-image']}>
        <Vector size={227} variant="quran-stars" />
      </div>
      <div className={clsx(styles.card, 'bg_light_blue_gradient')}>
        <div className={styles['card-content']}>
          <Vector size={120} variant="basmalah" />
          <div className={styles['card-title']}>{t('title')}</div>
          <div className={styles['card-description']}>{t('description')}</div>
          <div className={styles['card-button']}>
            <Button variant="link">
              <CustomIcon size={30} variant="arrow-right" />
            </Button>
          </div>
        </div>

        <div className={styles['card-bg-image']}>
          <Vector size={350} variant="mosque-4" />
        </div>
      </div>
    </div>
  )
}
