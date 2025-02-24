import clsx from 'clsx'

import { Vector, Button, CustomIcon } from '@/shared/ui'

import styles from './TafseerCard.module.scss'

export const TafseerCard = ({
  title,
  authorName,
}: {
  title: string
  authorName: string
}) => {
  return (
    <div className={styles['card-container']}>
      <div className={clsx(styles.card, 'bg_light_blue_gradient')}>
        <div className={styles['card-content']}>
          <div className={styles['card-title']}>{title}</div>
          <div className={styles['card-description']}>{authorName}</div>
          <div className={styles['card-button']}>
            <Button variant="dark-blue">
              <CustomIcon size={20} variant="arrow-right" />
            </Button>
          </div>
        </div>

        <div className={styles['card-bg-image']}>
          <Vector size={150} variant="quran-card" />
        </div>
      </div>
    </div>
  )
}
