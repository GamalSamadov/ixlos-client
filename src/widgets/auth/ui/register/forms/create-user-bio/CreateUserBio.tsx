'use client'

import { useTranslations } from 'next-intl'

import { Button } from '@/shared/ui/buttons'
import { TextEditor } from '@/shared/ui/text-editor'
import { useUserBioAdd } from '@/widgets/auth/hooks'
import styles from '@/widgets/shared/styles/Bio.module.scss'

export const CreateUserBio = () => {
  const {
    setContent,
    content,
    handleSubmit,
    register,
    onSubmit,
    isLoading,
    resetStatesAndPush,
  } = useUserBioAdd()

  const t = useTranslations('auth.register.addBio')

  return (
    <section className={styles.container}>
      <h1 className={styles.title}>{t('title')}</h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className={styles.form}
        autoComplete="off"
      >
        <TextEditor content={content} onChange={(e) => setContent(e)} />
        <input
          {...register('bio')}
          type="text"
          value={content}
          className="hidden"
        />

        <div className={styles.buttons}>
          <Button variant="link" onClick={resetStatesAndPush}>
            {t('skip')}
          </Button>
          <Button type="submit" disabled={isLoading}>
            {t('confirm')}
          </Button>
        </div>
      </form>
    </section>
  )
}
