'use client'

import { useParams, useRouter } from 'next/navigation'
import { useTranslations } from 'next-intl'

import { ADMIN_PAGES } from '@/shared/config/pages/admin.config'
import Button from '@/shared/ui/buttons/Button'
import TextEditor from '@/shared/ui/text-editor/TextEditor'

import styles from '../Bio.module.scss'
import useAuthorBioAdd from './useAuthorBioAdd'

const AddAuthorBio = () => {
  const { id }: { id: string } = useParams()
  const {
    setContent,
    content,
    handleSubmit,
    register,
    onSubmit,
    isLoading,
    formState,
  } = useAuthorBioAdd(id)

  const router = useRouter()

  const t = useTranslations('admin.updateAuthor.bio.add')
  const tError = useTranslations('errors')

  const error = formState.errors.bio?.message

  return (
    <section className={styles.container}>
      <h1 className={styles.title}>{t('title')}</h1>

      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <TextEditor content={content} onChange={(e) => setContent(e)} />
        <input
          {...register('bio', {
            maxLength: {
              value: 255,
              message: tError('bioMaxLength'),
            },
          })}
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

export default AddAuthorBio
