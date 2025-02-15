import clsx from 'clsx'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { useTranslations } from 'next-intl'

import { ADMIN_PAGES } from '@/shared/config/pages/admin.config'
import Button from '@/shared/ui/buttons/Button'

import styles from '../admin-widget.module.scss'

const AddAuthorForm = () => {
  const t = useTranslations('admin.addAuthor')
  return (
    <section className={clsx(styles.container, 'h_screen_with_header')}>
      <div className={styles.top}>
        <Link href={ADMIN_PAGES.AUTHORS}>
          <Button variant="link">
            <ArrowLeft size={30} /> {t('back')}
          </Button>
        </Link>
      </div>
      <div className={clsx(styles.bottom, 'bg_gray_custom')}></div>
    </section>
  )
}

export default AddAuthorForm
