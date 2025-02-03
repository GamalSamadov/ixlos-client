import styles from './HrWithTitle.module.scss'

interface Props {
  title: string
}

export const HrWithTitle = ({ title }: Props) => {
  return <span className={styles.or}>{title}</span>
}
