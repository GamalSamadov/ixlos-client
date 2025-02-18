'use client'

import { useParams } from 'next/navigation'
import { useTranslations } from 'next-intl'

import Button from '@/shared/ui/buttons/Button'
import TextEditor from '@/shared/ui/text-editor/TextEditor'
import useUpdateBio from '@/widgets/shared/hooks/useUpdateBio'

import styles from '../Bio.module.scss'

const EditBio = ({ bio }: { bio: string }) => {
  const { id }: { id: string } = useParams()
  const {
    setContent,
    content,
    handleSubmit,
    register,
    onSubmit,
    isLoading,
    formState,
  } = useUpdateBio(id, bio)

  const t = useTranslations('profile.updateBio')

  const error = formState.errors.bio?.message

  return (
    <section className={styles.container}>
      <h1 className={styles.title}>{t('title')}</h1>

      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <TextEditor content={content} onChange={(e) => setContent(e)} />
        <input
          {...register('bio')}
          type="text"
          value={content}
          className="hidden"
        />

        <p className="text-red-600">{error}</p>

        <div className={styles.buttons}>
          <Button type="submit" disabled={isLoading}>
            {t('confirm')}
          </Button>
        </div>
      </form>
    </section>
  )
}

export default EditBio
