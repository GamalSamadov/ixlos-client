import clsx from 'clsx'
import { getTranslations } from 'next-intl/server'

import {
  ResultTafseer,
  SearchTafseer,
  TafseersList,
} from '@/entities/tafseer/ui'

import styles from './MainTafseer.module.scss'

export const MainTafseer = async () => {
  const t = await getTranslations('tafseer.search')
  return (
    <section className={clsx(styles.container, 'h_screen_with_header')}>
      <div className={styles.left}>
        <div className={styles['top-left']}>
          <SearchTafseer
            result={t('resultDefault')}
            placeholder={t('placeholder')}
          />
        </div>
        <div className={clsx(styles['body-left'], 'bg_gray_custom')}>
          <ResultTafseer />
        </div>
      </div>
      <div className={styles.right}>
        <TafseersList />
      </div>
    </section>
  )
}
