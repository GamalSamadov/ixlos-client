import Header from '@/widgets/shared/ui/header/Header/Header'

import styles from './TafseerPage.module.scss'

const TafseerPage = () => {
  return (
    <>
      <Header />
      <section className={styles.container}>
        <div className={styles['top-left']}>search</div>
        <div className={styles['top-right']}>quran</div>

        <div className={styles.body}>
          <div className={styles['body-left']}>right</div>
        </div>
      </section>
    </>
  )
}

export default TafseerPage
