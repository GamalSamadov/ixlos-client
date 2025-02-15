import clsx from 'clsx'

import Header from '@/widgets/shared/ui/header/Header/Header'

import styles from './TafseerPage.module.scss'

const TafseerPage = () => {
  return (
    <>
      <Header />
      <section className={clsx(styles.container, 'h_screen_with_header')}>
        <div className={styles['top-left']}>search</div>
        <div className={styles['top-right']}>quran</div>

        <div className={clsx(styles.body, 'bg_gray_custom')}>
          <div className={styles['body-left']}>right</div>
        </div>
      </section>
    </>
  )
}

export default TafseerPage
