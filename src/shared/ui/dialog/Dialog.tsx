import { AnimatePresence, motion } from 'framer-motion'
import { ReactNode, useState } from 'react'

import styles from './Dialog.module.scss'
import Button from '../buttons/Button'

interface Props {
  children: ReactNode
  title: string
  message: string
  closeText: string
  continueText: string
  action: () => void
}

const Dialog = ({
  children,
  title,
  message,
  closeText,
  continueText,
  action,
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
            <motion.div
              className={styles.overlay}
              onClick={() => setIsDialogOpen(false)}
              key="modal"
              exit={{ opacity: 0 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            ></motion.div>
            <motion.div
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
                  onClick={() => {
                    setIsDialogOpen(false)
                    action()
                  }}
                >
                  {continueText}
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Dialog
