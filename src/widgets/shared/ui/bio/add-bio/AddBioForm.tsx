'use client'

import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { useTranslations } from 'next-intl'

import { USER_PAGES } from '@/shared/config/pages/user.config'
import Button from '@/shared/ui/buttons/Button'
import TextEditor from '@/shared/ui/text-editor/TextEditor'
import useUpdateBio from '@/widgets/shared/hooks/useUpdateBio'

import styles from '../Bio.module.scss'

const AddBioForm = () => {
  const { id }: { id: string } = useParams()
  const {
    setContent,
    content,
    handleSubmit,
    register,
    onSubmit,
    isLoading,
    formState,
  } = useUpdateBio(id, '')

  const t = useTranslations('profile.addBio')

  const error = formState.errors.bio?.message

  return (
    <section className={styles.container}>
      <div className={styles.top_link}>
        <Link href={USER_PAGES.PROFILE_BY_ID(id)}>
          <Button variant="link">
            <ArrowLeft size={30} /> {t('back')}
          </Button>
        </Link>
      </div>

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

export default AddBioForm
