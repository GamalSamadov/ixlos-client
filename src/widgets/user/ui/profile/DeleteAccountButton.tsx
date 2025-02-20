'use client'

import { useTranslations } from 'next-intl'
import React from 'react'

import Button from '@/shared/ui/buttons/Button'
import Dialog from '@/shared/ui/dialog/Dialog'
import useDeleteAccount from '@/widgets/shared/hooks/useDeleteAccount'

import styles from './Profile.module.scss'

const DeleteAccountButton = ({ id }: { id: string }) => {
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

export default DeleteAccountButton
