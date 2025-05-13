import clsx from 'clsx'
import { PenSquare } from 'lucide-react'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { Fragment } from 'react'

import { ShowMore } from '@/features/show-more'
import { PUBLIC_PAGES } from '@/shared/config/pages'
import { useTake } from '@/shared/hooks/useTake'
import { Button } from '@/shared/ui'
import { IAyahs } from '@/widgets/tafseer/types/main-tafseer.type'

import styles from './SearchAyahs.module.scss'

import '@/shared/styles/ayahs.scss'

export const SearchAyahs = ({
  ayahs,
  hasMoreAyahs,
  loadingAyahs,
  isAdmin,
}: IAyahs) => {
  const { handleTake } = useTake(PUBLIC_PAGES.HOME)
  const tShared = useTranslations('shared')
  return (
    <>
      {ayahs ? (
        ayahs.map((ayah) => (
          <Fragment key={ayah.id}>
            <div className={styles['ayah-container']}>
              <div>
                {isAdmin && (
                  <Button variant="link">
                    <PenSquare size={23} />
                  </Button>
                )}
              </div>
              <div className={styles['ayah-content']}>
                <Link
                  className={styles['ayah-link']}
                  href={PUBLIC_PAGES.AYAH_DETAILS(ayah.id)}
                >
                  <div className={styles['ayah-details']}>
                    <div className={styles['ayah-qfc']}>
                      <h3
                        className={clsx(
                          styles.ayah,
                          `font-quran-page-${ayah.pageNumber}`
                        )}
                      >
                        {ayah.qcfText}
                      </h3>
                    </div>
                    <div className={styles['ayah-detail']}>
                      <p className={styles['surah-name']}>
                        <span className={styles.name}>
                          {ayah.surah.uzbekName}
                        </span>{' '}
                        -{' '}
                        <span className={styles['arabic-name']}>
                          {ayah.surah.arabicName}
                        </span>
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <hr className={hasMoreAyahs ? 'hr' : 'hr-last-hidden'} />
          </Fragment>
        ))
      ) : (
        <div className={styles['no-data']}>
          <h2>{tShared('noData')} :(</h2>
        </div>
      )}

      {hasMoreAyahs && (
        <>
          <ShowMore
            onClick={handleTake}
            title={tShared('loadMore')}
            loading={loadingAyahs}
          />
        </>
      )}
    </>
  )
}
