import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { getTranslations } from 'next-intl/server'

import { PUBLIC_PAGES } from '@/shared/config/pages/public.config'
import Button from '@/shared/ui/buttons/Button'
import LogoClear from '@/shared/ui/vectors/LogoClear'
import Header from '@/widgets/shared/ui/header/Header/Header'

const Custom404 = async () => {
  const t = await getTranslations('errors.404')
  return (
    <section className="error-page">
      <Header />

      <div className="error-section">
        <LogoClear size={200} />
        <h1 className="error-title">
          {t('title')} - {t('message')}
        </h1>
        <h2 className="error-subtitle">{t('subtitle')}</h2>

        <Link href={PUBLIC_PAGES.HOME}>
          <Button variant="link">
            <ArrowLeft size={30} />
            Tafsirga qaytish
          </Button>
        </Link>
      </div>
    </section>
  )
}

export default Custom404
