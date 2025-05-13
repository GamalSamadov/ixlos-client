import clsx from 'clsx'

import { BackButton } from '@/features/back-button/BackButton'
import { GetAyahsByPageNumberQuery } from '@/graphql/generated/output'
import { PUBLIC_PAGES } from '@/shared/config/pages'
import { Vector } from '@/shared/ui'

import styles from './PageDetails.module.scss'

import '@/shared/styles/ayahs.scss'
import '@/shared/styles/surahs.scss'

interface Props {
  pageDetails: GetAyahsByPageNumberQuery['getAyahsByPageNumber']
}

// TODO: fix width of the page
// TODO: fix the font loading issue

export const PageDetails = ({ pageDetails }: Props) => {
  return (
    <section
      className={clsx(
        styles.container,
        'h_screen_with_header',
        'bg_gray_custom'
      )}
    >
      <div className={styles.back}>
        <BackButton link={PUBLIC_PAGES.HOME} />
      </div>

      <div className={styles.details}>
        <div className={styles['details-container']}>
          {pageDetails.map((detail) =>
            detail.ayahs?.map((ayah) => (
              <>
                {detail.surah && ayah.number === 1 && (
                  <>
                    <h1 className={clsx(styles.surah, 'surah-font')}>
                      {detail.surah.qfcName}
                    </h1>
                    <h2 className={styles.basmalah}>
                      <Vector size={150} variant="basmalah" />
                    </h2>
                  </>
                )}
                <span
                  className={clsx(
                    styles.ayah,
                    `font-quran-page-${ayah.pageNumber}`
                  )}
                  key={ayah.id}
                >
                  {ayah.qcfText.replace(' ', '').substring(0, 1)}
                  {'\u200A'}
                  {ayah.qcfText.replace(' ', '').substring(1)}
                </span>
              </>
            ))
          )}
        </div>
      </div>
    </section>
  )
}
