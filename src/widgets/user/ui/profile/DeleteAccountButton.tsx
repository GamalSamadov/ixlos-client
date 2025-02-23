'use client'

import { useTranslations } from 'next-intl'
import React from 'react'

import { Dialog } from '@/entities/shared/ui'
import { Button } from '@/shared/ui'
import { useDeleteAccount } from '@/widgets/shared/hooks'

import styles from './Profile.module.scss'

export const DeleteAccountButton = ({ id }: { id: string }) => {
  const t = useTranslations('profile.deleteAccount')
  const { deleteUser, isLoading } = useDeleteAccount(id)

  return (
    <div className={styles.delete_account}>
      <Dialog
        variant="danger"
        title={t('title')}
        message={t('message')}
        closeText={t('cancel')}
        continueText={t('confirm')}
        action={deleteUser}
      >
        <Button variant="danger" disabled={isLoading}>
          {isLoading ? t('loading') : t('title')}
        </Button>
      </Dialog>
    </div>
  )
}
