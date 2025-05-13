import clsx from 'clsx'
import { PenSquare } from 'lucide-react'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { Fragment } from 'react'

import { SurahRevelationType } from '@/graphql/generated/output'
import { PUBLIC_PAGES } from '@/shared/config/pages'
import { Button, CustomIcon, IslamicNumber } from '@/shared/ui'
import { ISurahs } from '@/widgets/tafseer/types/main-tafseer.type'

import styles from './Surahs.module.scss'

import '@/shared/styles/surahs.scss'

export const Surahs = ({ surahs, isAdmin }: ISurahs) => {
  const t = useTranslations('tafseer.surahs')
  return (
    <>
      {surahs.map((surah, index) => (
        <Fragment key={surah.id}>
          <div className={styles['surah-container']}>
            <div>
              {isAdmin && (
                <Button variant="link">
                  <PenSquare size={23} />
                </Button>
              )}
            </div>

            <div className={styles['surah-content']}>
              <Link
                href={PUBLIC_PAGES.QURAN_PAGE_DETAILS(surah.pageNumber)}
                className={styles['surah-link']}
              >
                <div className={styles['surah-details']}>
                  <div className={styles['surah-name']}>
                    <h3 className={styles.name}>{surah.uzbekName}</h3>
                    <p className={clsx(styles['arabic-name'], 'surah-font')}>
                      {surah.qfcName}
                    </p>
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
                        surah.revelationType ===
                          SurahRevelationType.Medinan && (
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
              </Link>

              <div className={styles['surah-number']}>
                <IslamicNumber number={surah.number} />
              </div>
            </div>
          </div>
          <hr
            className={index + 1 === surahs.length ? 'hr-last-hidden' : 'hr'}
          />
        </Fragment>
      ))}
    </>
  )
}
