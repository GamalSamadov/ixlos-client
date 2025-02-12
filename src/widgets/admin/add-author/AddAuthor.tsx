import Link from 'next/link'

import { ADMIN_PAGES } from '@/shared/config/pages/admin.config'
import Button from '@/shared/ui/buttons/Button'

import styles from '../admin-widget.module.scss'

const AddAuthor = () => {
  return (
    <section className={styles.container}>
      <div className={styles.top}>
        <Link href={ADMIN_PAGES.ADD_AUTHORS}>
          <Button variant="white">Add author</Button>
        </Link>
      </div>
      <div className={styles.bottom}></div>
    </section>
  )
}

export default AddAuthor
