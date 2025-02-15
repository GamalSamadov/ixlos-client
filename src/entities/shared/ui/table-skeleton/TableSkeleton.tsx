import Skeleton from '@/shared/ui/skeleton/Skeleton'

import styles from './TableSkeletion.module.scss'

const TableSkeleton = () => {
  return (
    <div className={styles.container}>
      <Skeleton width={'100%'} height={30} />
      {Array.from({ length: 10 }, (_, index) => (
        <div className="" key={index}>
          <Skeleton width={'100%'} height={52.2} />
        </div>
      ))}
    </div>
  )
}

export default TableSkeleton
