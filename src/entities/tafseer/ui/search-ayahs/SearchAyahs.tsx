'use client'

import { PenSquare } from 'lucide-react'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { Fragment } from 'react'

import { Collapse } from '@/entities/shared/ui'
import { ShowMore } from '@/features/show-more'
import { SearchAyahByTextQuery } from '@/graphql/generated/output'
import { PUBLIC_PAGES } from '@/shared/config/pages'
import { useTake } from '@/shared/hooks/useTake'
import { Button, IslamicNumber } from '@/shared/ui'

import styles from './SearchAyahs.module.scss'

export const SearchAyahs = ({
  ayahs,
  hasMore,
  loading,
  isAdmin,
}: {
  ayahs: SearchAyahByTextQuery['searchAyahByText']['ayahs']
  hasMore: SearchAyahByTextQuery['searchAyahByText']['hasMore']
  loading: boolean
  isAdmin: boolean | undefined
}) => {
  const { handleTake, resetTake } = useTake(PUBLIC_PAGES.HOME)
  const tShared = useTranslations('shared')
  return (
    <>
      {ayahs ? (
        ayahs.map((ayah) => (
          <Fragment key={ayah.id}>
            <div className={styles['ayah-container']}>
              {isAdmin && (
                <Button variant="link">
                  <PenSquare size={23} />
                </Button>
              )}
              <div className={styles['ayah-content']}>
                <Link
                  className={styles['ayah-link']}
                  href={PUBLIC_PAGES.AYAH_DETAILS(ayah.id)}
                >
                  <div className={styles['ayah-details']}>
                    <div className={styles['ayah-name']}>
                      <h3 className={styles.name}>{ayah.arabicText}</h3>
                    </div>
                    <div className={styles['ayah-detail']}>
                      <p className={styles['surah-name']}>
                        <span className={styles.name}>{ayah.surah.name}</span> -{' '}
                        <span className={styles['arabic-name']}>
                          {ayah.surah.arabicName}
                        </span>
                      </p>
                    </div>
                  </div>
                </Link>
                <div className={styles['ayah-number']}>
                  <IslamicNumber number={ayah.number} isAyah />
                </div>
              </div>
            </div>

            {hasMore ? (
              <>
                <hr />
                <ShowMore
                  onClick={handleTake}
                  title={tShared('loadMore')}
                  loading={loading}
                />
              </>
            ) : (
              ayahs.length > 10 && (
                <>
                  <hr />
                  <Collapse
                    onClick={resetTake}
                    title={tShared('collapse')}
                    loading={loading}
                  />
                </>
              )
            )}
          </Fragment>
        ))
      ) : (
        <div className={styles['no-data']}>
          <h2>{tShared('noData')} :(</h2>
        </div>
      )}
    </>
  )
}
