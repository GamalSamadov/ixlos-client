'use client'

import { useRouter } from 'nextjs-toploader/app'
import { useTranslations } from 'next-intl'

import { ADMIN_PAGES } from '@/shared/config/pages/admin.config'
import { Button, TextEditor } from '@/shared/ui'
import { useAuthorAddBio } from '@/widgets/admin/hooks'
import styles from '@/widgets/shared/styles/Bio.module.scss'

export const AddAuthorBio = () => {
  const {
    setContent,
    content,
    handleSubmit,
    register,
    onSubmit,
    isLoading,
    formState,
  } = useAuthorAddBio()

  const router = useRouter()

  const t = useTranslations('admin.authorAddBio')

  const error = formState.errors.bio?.message

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

        <p className="text-red-600">{error}</p>

        <div className={styles.buttons}>
          <Button
            variant="link"
            onClick={() => router.push(ADMIN_PAGES.AUTHORS)}
          >
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
