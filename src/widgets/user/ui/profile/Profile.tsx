import clsx from 'clsx'
import { CaseSensitive, Edit2, Plus, Upload, User2 } from 'lucide-react'
import Link from 'next/link'
import { getTranslations } from 'next-intl/server'

import { USER_PAGES } from '@/shared/config/pages/user.config'
import { Avatar, Button, CustomIcon } from '@/shared/ui'
import { getAuth } from '@/shared/utils/auth/get-auth'
import { getProfileById } from '@/widgets/shared/actions'

import { DeleteAccountButton } from './DeleteAccountButton'
import styles from './Profile.module.scss'

export const Profile = async ({ id }: { id: string }) => {
  const { profile } = await getProfileById(id)
  const currentUser = await getAuth()
  const t = await getTranslations('profile')
  const hasAccess = profile.id === currentUser?.userId || currentUser?.isAdmin

  return (
    <section className={clsx(styles.container, 'bg_gray_custom')}>
      <div className={styles.left}>
        <Avatar
          size={150}
          avatar={profile.avatar}
          username={profile.username}
          displayName={profile.displayName}
        />

        {hasAccess && (
          <Link href={USER_PAGES.PROFILE_EDIT_AVATAR(profile.id)}>
            <Button variant="link">
              <Upload />
              {t('updateAvatar')}
            </Button>
          </Link>
        )}
        <div className={styles.info}>
          <div className={styles.item}>
            <CaseSensitive size={30} className={styles.icon} />
            <p className={styles.text}>
              {profile.displayName ? profile.displayName : ''}
            </p>
          </div>
          <div className={styles.item}>
            <CustomIcon size={29} variant="email" />
            <p className={styles.text}>{profile.email}</p>
          </div>
          <div className={styles.item}>
            <User2 size={30} className={styles.icon} />
            <p className={styles.text}>@{profile.username}</p>
          </div>
          {hasAccess && (
            <div className={styles.edit_button}>
              <Link
                href={USER_PAGES.PROFILE_EDIT_INFO(profile.id)}
                className="w-full"
              >
                <Button variant="primary" size="full">
                  <Edit2 /> {t('edit')}
                </Button>
              </Link>
            </div>
          )}
        </div>

        {hasAccess && (
          <div className={styles.actions}>
            <Link href={USER_PAGES.PROFILE_UPDATE_PASSWORD(profile.id)}>
              <Button variant="link">{t('updatePassword')}</Button>
            </Link>
            <DeleteAccountButton id={profile.id} />
          </div>
        )}
      </div>
      <div className={styles.right}>
        <div className={styles.bio}>
          <div className={styles.bio_header}>
            <h1 className={styles.bio_heading}>{t('bio')}</h1>
            {hasAccess && (
              <div className={styles.edit_bio}>
                {profile.bio ? (
                  <Link href={USER_PAGES.PROFILE_EDIT_BIO(profile.id)}>
                    <Button variant="link">
                      <Edit2 /> {t('edit')}
                    </Button>
                  </Link>
                ) : (
                  <Link href={USER_PAGES.PROFILE_ADD_BIO(profile.id)}>
                    <Button variant="link">
                      <Plus /> {t('add')}
                    </Button>
                  </Link>
                )}
              </div>
            )}
          </div>

          {profile.bio ? (
            <div dangerouslySetInnerHTML={{ __html: profile.bio }} />
          ) : (
            <p className={styles.no_bio}>{t('noBio')}</p>
          )}
        </div>
      </div>
    </section>
  )
}
