import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { getTranslations } from 'next-intl/server'

import { Button } from '@/shared/ui'

export const BackButton = async ({ link }: { link: string }) => {
  const t = await getTranslations('shared')
  return (
    <Link href={link}>
      <Button variant="link">
        <ArrowLeft size={30} /> {t('back')}
      </Button>
    </Link>
  )
}
