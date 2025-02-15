'use client'

import Link from 'next/link'
import { useTranslations } from 'next-intl'

import CustomIcon from '@/shared/ui/icons/CustomIcon'

import styles from './Footer.module.scss'
import { LINKS } from './links'

const Footer = () => {
  const t = useTranslations('landing.footer')
  return (
    <footer className={styles.footer}>
      <p className={styles.title}>
        {t('title')} {new Date().getFullYear()}
        {' ©'}
      </p>

      <ul className={styles.links}>
        {LINKS.map((link) => (
          <li key={link.id} className={styles.link}>
            <Link href={link.href} target="_blank">
              <CustomIcon size={25} variant={link.icon} />
            </Link>
          </li>
        ))}
      </ul>
    </footer>
  )
}

export default Footer
