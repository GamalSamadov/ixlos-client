import styles from './FormTitle.module.scss'

interface Props {
  title: string
}

export const FormTitle = ({ title }: Props) => {
  return (
    <div className={styles.title_container}>
      <h1 className={styles.title}>{title}</h1>

      <hr className={styles.hr} />
    </div>
  )
}
