import { Edit3 } from 'lucide-react'
import Link from 'next/link'
import { getTranslations } from 'next-intl/server'

import { ADMIN_PAGES } from '@/shared/config/pages'
import { Button } from '@/shared/ui'
import { getAuth } from '@/shared/utils/auth/get-auth'
import { Header } from '@/widgets/shared/ui'
import { MainTafseer } from '@/widgets/tafseer/ui'

const TafseerPage = async () => {
  const t = await getTranslations('tafseer.admin')
  const user = await getAuth()
  return (
    <>
      <Header />
      {user?.isAdmin && (
        <Link href={ADMIN_PAGES.EDIT_TAFSEER}>
          <Button variant="link" className="mb-4">
            <Edit3 size={20} /> {t('edit')}
          </Button>
        </Link>
      )}
      <MainTafseer />
    </>
  )
}

export default TafseerPage
