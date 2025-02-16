'use client'

import { useRouter } from 'next/navigation'
import { useTranslations } from 'next-intl'

import { PUBLIC_PAGES } from '@/shared/config/pages/public.config'
import Button from '@/shared/ui/buttons/Button'
import Dialog from '@/shared/ui/dialog/Dialog'

import styles from './ContinueWithoutSignin.module.scss'
import { HrWithTitle } from '../../../shared/ui/from/hr-with-title/HrWithTitle'

const ContinueWithoutSignin = () => {
  const router = useRouter()
  const t = useTranslations('auth.continue')
  return (
    <div className={styles.container}>
      <HrWithTitle title={t('hr')} />

      <Dialog
        title={t('confirm.title')}
        message={t('confirm.message')}
        closeText={t('confirm.close')}
        continueText={t('confirm.continue')}
        action={() => router.push(PUBLIC_PAGES.HOME)}
      >
        <Button variant="transparent" size="full">
          {t('title')}
        </Button>
      </Dialog>
    </div>
  )
}

export default ContinueWithoutSignin
