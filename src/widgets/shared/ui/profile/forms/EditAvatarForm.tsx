'use client'

import clsx from 'clsx'
import { ArrowLeft, Trash2, Upload } from 'lucide-react'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { useRef } from 'react'

import { FormTitle } from '@/entities/form/ui/form-title/FormTitle'
import { GetProfileByIdQuery } from '@/graphql/generated/output'
import { USER_PAGES } from '@/shared/config/pages/user.config'
import { Avatar, Button, Skeleton } from '@/shared/ui'
import { useUpdateAvatar } from '@/widgets/shared/hooks'
import styles from '@/widgets/shared/styles/Form.module.scss'

export const EditAvatarForm = ({
  profile,
}: {
  profile: GetProfileByIdQuery['getProfileById']
}) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const t = useTranslations('profile.updateAvatarPage')
  const tError = useTranslations('errors')

  const {
    register,
    isLoading,
    formState,
    handleImageChange,
    removeAvatar,
    isLoadingRemove,
  } = useUpdateAvatar(profile)

  const fileError = formState.errors.file?.message

  return (
    <section className={clsx(styles.container)}>
      <div className={styles.top_link}>
        <Link href={USER_PAGES.PROFILE_BY_ID(profile.id)}>
          <Button variant="link">
            <ArrowLeft size={30} /> {t('back')}
          </Button>
        </Link>
      </div>

      <div
        className={clsx(
          styles.form_container,
          'bg_gray_custom',
          'h_screen_with_header'
        )}
      >
        <form className={clsx(styles.form)}>
          <FormTitle title={t('title')} />
          <div className={styles.avatar_container}>
            {isLoading ? (
              <Skeleton width={250} height={250} />
            ) : (
              <Avatar
                size={250}
                avatar={profile.avatar}
                username={profile.username}
                displayName={profile.displayName}
              />
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
              disabled={isLoading || isLoadingRemove}
            >
              <Upload /> {isLoading ? t('loading') : t('confirm')}
            </Button>
          </div>

          {profile.avatar && (
            <div className={styles.upload_input}>
              <Button
                variant="danger"
                size="full"
                onClick={() =>
                  removeAvatar({ variables: { userId: profile.id } })
                }
                disabled={isLoading || isLoadingRemove}
              >
                <Trash2 /> {isLoadingRemove ? t('removing') : t('remove')}
              </Button>
            </div>
          )}

          <p className={styles.error}>{fileError}</p>
        </form>
      </div>
    </section>
  )
}
