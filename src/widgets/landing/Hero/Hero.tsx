'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useTranslations } from 'next-intl'

import { PUBLIC_PAGES } from '@/shared/config/pages/public.config'
import Button from '@/shared/ui/buttons/Button'
import { TUserDataState } from '@/shared/utils/user/transform-user-to-state'

import styles from './Hero.module.scss'

const Hero = ({ user }: { user: TUserDataState | null }) => {
  const t = useTranslations('landing.hero')
  return (
    <section className={styles.hero}>
      {/* TODO: add header section */}
      <div className={styles.content}>
        <h1 className={styles.title}>{t('platformName')}</h1>
        <p className={styles.subtitle}>{t('subtitle')}</p>
        <Link
          href={user ? PUBLIC_PAGES.HOME : PUBLIC_PAGES.LOGIN}
          className={styles.link}
        >
          <Button variant="white" size="full">
            {t('button')}
          </Button>
        </Link>
      </div>

      <div className={styles.stars}>
        <Image
          src="/assets/vectors/stars.svg"
          width={300}
          height={300}
          alt="Stars"
          draggable={false}
        />
      </div>

      <div className={styles.logo}>
        <Image
          src="/assets/vectors/quran.png"
          width={550}
          height={550}
          alt="Quran"
          draggable={false}
        />
      </div>
      {/* TODO: add about section */}
    </section>
  )
}

export default Hero
