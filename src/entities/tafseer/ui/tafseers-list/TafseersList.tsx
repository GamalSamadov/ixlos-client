import { TafseerCard } from './tafseer-card'
import { TafseersCard } from './tafseers-card'
import styles from './TafseersList.module.scss'

export const TafseersList = () => {
  return (
    <div className={styles['tafseers-list']}>
      <TafseersCard />
      <div className={styles['tafseer-cards']}>
        <TafseerCard
          title={'Tafsirul mubin'}
          authorName={'Sodiq Samarqandiy'}
        />
        <TafseerCard
          title={'Tafsirul mubin'}
          authorName={'Sodiq Samarqandiy'}
        />
      </div>
    </div>
  )
}
