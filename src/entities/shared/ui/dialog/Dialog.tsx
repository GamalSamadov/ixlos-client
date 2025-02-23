'use client'

import { AnimatePresence, m } from 'framer-motion'
import { ReactNode, useState } from 'react'

import styles from './Dialog.module.scss'
import { Button } from '../../../../shared/ui/buttons/button/Button'

interface Props {
  children: ReactNode
  title: string
  message: string
  closeText: string
  continueText: string
  action: () => void
  variant?: 'danger' | 'primary'
}

export const Dialog = ({
  children,
  title,
  message,
  closeText,
  continueText,
  action,
  variant = 'primary',
}: Props) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  return (
    <div className={styles.dialog_container}>
      <div
        onClick={() => {
          setIsDialogOpen(true)
        }}
      >
        {children}
      </div>
      <AnimatePresence>
        {isDialogOpen && (
          <>
            <m.div
              className={styles.overlay}
              onClick={() => setIsDialogOpen(false)}
              key="modal"
              exit={{ opacity: 0 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            ></m.div>
            <m.div
              className={styles.dialog}
              exit={{ opacity: 0 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <h1 className={styles.heading}>{title}</h1>
              <p className={styles.message}>{message}</p>
              <div className={styles.buttons}>
                <Button variant="link" onClick={() => setIsDialogOpen(false)}>
                  {closeText}
                </Button>
                <Button
                  variant={variant}
                  onClick={() => {
                    setIsDialogOpen(false)
                    action()
                  }}
                >
                  {continueText}
                </Button>
              </div>
            </m.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}
