'use client'

import clsx from 'clsx'
import { useTranslations } from 'next-intl'

import {
  Surahs,
  SearchTafseer,
  TafseersList,
  SearchAyahs,
} from '@/entities/tafseer/ui'
import { ITafseerMainData } from '@/widgets/tafseer/types/main-tafseer.type'

import styles from './MainTafseer.module.scss'

export const MainTafseer = ({
  ayahsData,
  surahsData,
  isAdmin,
}: ITafseerMainData) => {
  const { ayahs, loadingAyahs, hasMoreAyahs, totalAyahs } = ayahsData
  const { surahs, loadingSurahs } = surahsData
  const t = useTranslations('tafseer.search')

  return (
    <section className={clsx(styles.container, 'h_screen_with_header')}>
      <div className={styles.left}>
        <div className={styles['top-left']}>
          <SearchTafseer
            result={
              ayahs ? `${t('result')}: ${totalAyahs}` : t('resultDefault')
            }
            placeholder={t('placeholder')}
          />
        </div>
        <div className={clsx(styles['body-left'], 'bg_gray_custom')}>
          {ayahs ? (
            <SearchAyahs
              ayahs={ayahs}
              hasMoreAyahs={hasMoreAyahs}
              loadingAyahs={loadingAyahs}
              isAdmin={isAdmin}
            />
          ) : (
            <Surahs
              surahs={surahs}
              loadingSurahs={loadingSurahs}
              isAdmin={isAdmin}
            />
          )}
        </div>
      </div>
      <div className={styles.right}>
        <TafseersList />
      </div>
    </section>
  )
}
