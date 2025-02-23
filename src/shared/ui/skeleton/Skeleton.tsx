import styles from './Skeleton.module.scss'

interface Props {
  width?: number | string | undefined
  height?: number | string | undefined
}

export const Skeleton = ({ width, height }: Props) => {
  return <div className={styles.skeleton} style={{ width, height }} />
}
