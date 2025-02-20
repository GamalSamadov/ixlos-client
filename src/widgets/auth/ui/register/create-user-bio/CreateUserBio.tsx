'use client'

import { useRouter } from 'next/navigation'
import { useTranslations } from 'next-intl'

import { PUBLIC_PAGES } from '@/shared/config/pages/public.config'
import Button from '@/shared/ui/buttons/Button'
import TextEditor from '@/shared/ui/text-editor/TextEditor'
import useUserBioAdd from '@/widgets/auth/hooks/useUserBioAdd'
import styles from '@/widgets/shared/styles/Bio.module.scss'

const CreateUserBio = () => {
  const { setContent, content, handleSubmit, register, onSubmit, isLoading } =
    useUserBioAdd()

  const router = useRouter()

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
          <Button variant="link" onClick={() => router.push(PUBLIC_PAGES.HOME)}>
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

export default CreateUserBio
