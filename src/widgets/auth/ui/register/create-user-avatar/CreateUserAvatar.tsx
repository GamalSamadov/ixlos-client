import clsx from 'clsx'
import { useSetAtom } from 'jotai'
import { Upload } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { useRef } from 'react'

import { FormTitle } from '@/entities/shared/ui/from/form-title/FormTitle'
import { createUserCurrentPageAtom } from '@/shared/atoms/create-user-current-page.atom'
import Avatar from '@/shared/ui/avatar/Avatar'
import Button from '@/shared/ui/buttons/Button'
import Skeleton from '@/shared/ui/skeleton/Skeleton'
import useUserAvatarAdd from '@/widgets/auth/hooks/useUserAvatarAdd'
import styles from '@/widgets/shared/styles/Form.module.scss'

const CreateUserAvatar = () => {
  const setCreateUserCurrentPage = useSetAtom(createUserCurrentPageAtom)
  const inputRef = useRef<HTMLInputElement>(null)
  const t = useTranslations('auth.register.addAvatar')
  const tError = useTranslations('errors')

  const { register, isLoading, formState, handleImageChange } =
    useUserAvatarAdd()

  const fileError = formState.errors.file?.message

  return (
    <section className={clsx(styles.container, 'h-screen')}>
      <div className={clsx(styles.form_container)}>
        <form className={clsx(styles.form)} autoComplete="off">
          <FormTitle title={t('title')} />
          <div className={styles.avatar_container}>
            {isLoading ? (
              <Skeleton width={250} height={250} />
            ) : (
              <Avatar size={250} />
            )}
          </div>

          <input
            {...register('file', {
              required: tError('required'),
            })}
            className={clsx(styles.input, styles.input_hidden)}
            name="file"
            id="file"
            type="file"
            ref={inputRef}
            onChange={handleImageChange}
          />

          <div className={styles.upload_input}>
            <Button
              variant="link"
              size="full"
              onClick={() => inputRef.current?.click()}
              disabled={isLoading}
            >
              <Upload /> {isLoading ? t('loading') : t('confirm')}
            </Button>
          </div>

          <Button
            variant="link"
            size="full"
            onClick={() => setCreateUserCurrentPage('create-bio')}
            className="mt-4"
          >
            {t('skip')}
          </Button>

          <p className={styles.error}>{fileError}</p>
        </form>
      </div>
    </section>
  )
}

export default CreateUserAvatar
