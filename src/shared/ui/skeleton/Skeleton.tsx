import styles from './Skeleton.module.scss'

interface Props {
  width?: number | string | undefined
  height?: number | string | undefined
}

const Skeleton = ({ width, height }: Props) => {
  return <div className={styles.skeleton} style={{ width, height }} />
}

export default Skeleton
