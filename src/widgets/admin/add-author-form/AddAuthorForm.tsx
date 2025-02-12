import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

import { ADMIN_PAGES } from '@/shared/config/pages/admin.config'
import Button from '@/shared/ui/buttons/Button'

import styles from '../admin-widget.module.scss'

const AddAuthorForm = () => {
  return (
    <section className={styles.container}>
      <div className={styles.top}>
        <Link href={ADMIN_PAGES.AUTHORS}>
          <Button variant="link">
            <ArrowLeft size={30} /> Ortga
          </Button>
        </Link>
      </div>
      <div className={styles.bottom}></div>
    </section>
  )
}

export default AddAuthorForm
