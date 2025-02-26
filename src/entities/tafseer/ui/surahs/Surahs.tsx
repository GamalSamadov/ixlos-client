'use client'

import { PenSquare } from 'lucide-react'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { Fragment } from 'react'

import { Collapse } from '@/entities/shared/ui'
import { ShowMore } from '@/features/show-more'
import {
  GetAllSurahsQuery,
  SurahRevelationType,
} from '@/graphql/generated/output'
import { PUBLIC_PAGES } from '@/shared/config/pages'
import { useTake } from '@/shared/hooks/useTake'
import { Button, CustomIcon, IslamicNumber } from '@/shared/ui'

import styles from './Surahs.module.scss'

export const Surahs = ({
  surahs,
  hasMore,
  loading,
  isAdmin,
}: {
  surahs: GetAllSurahsQuery['getAllSurahs']['surahs']
  hasMore: GetAllSurahsQuery['getAllSurahs']['hasMore']
  loading: boolean
  isAdmin: boolean | undefined
}) => {
  const { handleTake, resetTake } = useTake(PUBLIC_PAGES.HOME)
  const t = useTranslations('tafseer.surahs')
  const tShared = useTranslations('shared')
  return (
    <>
      {surahs.map((surah) => (
        <Fragment key={surah.id}>
          <div className={styles['surah-container']}>
            {isAdmin && (
              <Button variant="link">
                <PenSquare size={23} />
              </Button>
            )}
            <Link
              href={PUBLIC_PAGES.SURAH_DETAILS(surah.id)}
              className={styles['surah-link']}
            >
              <div className={styles['surah-details']}>
                <div className={styles['surah-name']}>
                  <h3 className={styles.name}>{surah.name}</h3>
                  <p className={styles['arabic-name']}>{surah.arabicName}</p>
                </div>
                <div className={styles['surah-detail']}>
                  <p className={styles['revelation-type']}>
                    {surah.revelationType === SurahRevelationType.Meccan ? (
                      <span className={styles.revelation}>
                        <span className={styles.icon}>
                          <CustomIcon size={15} variant="kaaba" />
                        </span>
                        <span className={styles['revelation-title']}>
                          {t('meccan')}
                        </span>
                      </span>
                    ) : (
                      surah.revelationType === SurahRevelationType.Medinan && (
                        <span className={styles.revelation}>
                          <span className={styles.icon}>
                            <CustomIcon
                              size={18}
                              variant="mosque-svgrepo-com"
                            />
                          </span>
                          <span className={styles['revelation-title']}>
                            {t('medinan')}
                          </span>
                        </span>
                      )
                    )}
                  </p>
                  <p className={styles['total-ayahs']}>
                    {t('totalAyahs')}: {surah.totalAyahs}
                  </p>
                </div>
              </div>

              <div className={styles['surah-number']}>
                <IslamicNumber number={surah.number} />
              </div>
            </Link>
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
            surahs.length > 10 && (
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
      ))}
    </>
  )
}
