import clsx from 'clsx'
import { getTranslations } from 'next-intl/server'

import {
  Surahs,
  SearchTafseer,
  TafseersList,
  SearchAyahs,
} from '@/entities/tafseer/ui'
import { ISearchParams } from '@/shared/types/search-params'
import { Vector } from '@/shared/ui'
import { getAuth } from '@/shared/utils/auth/get-auth'
import { getAllSearchAyahs, getAllSurahs } from '@/widgets/tafseer/actions'

import styles from './MainTafseer.module.scss'

export const MainTafseer = async ({ searchParams }: ISearchParams) => {
  const {
    surahs,
    hasMore: hasMoreSurahs,
    loading: loadingSurahs,
  } = await getAllSurahs({ searchParams })

  const {
    ayahs,
    hasMore: hasMoreAyahs,
    loading: loadingAyahs,
  } = await getAllSearchAyahs({ searchParams })

  const t = await getTranslations('tafseer.search')

  const user = await getAuth()

  const isAdmin = user?.isAdmin

  return (
    <section className={clsx(styles.container, 'h_screen_with_header')}>
      <div className={styles.left}>
        <div className={styles['card-image']}>
          <Vector size={300} variant="quran-stars-2" />
        </div>
        <div className={styles['top-left']}>
          <SearchTafseer
            result={
              ayahs ? `${t('result')}: ${ayahs.length}` : t('resultDefault')
            }
            placeholder={t('placeholder')}
          />
        </div>
        <div className={clsx(styles['body-left'], 'bg_gray_custom')}>
          {ayahs ? (
            <SearchAyahs
              ayahs={ayahs}
              hasMore={hasMoreAyahs}
              loading={loadingAyahs}
              isAdmin={isAdmin}
            />
          ) : (
            <Surahs
              surahs={surahs}
              hasMore={hasMoreSurahs}
              loading={loadingSurahs}
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
