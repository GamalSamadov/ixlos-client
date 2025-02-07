'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { useTranslations } from 'next-intl'
import { useState } from 'react'

import { TAdminLinks } from '@/shared/data/leftside/admin-links.data'
import { TMemberLinks } from '@/shared/data/leftside/member-links.data'
import { TUserLinks } from '@/shared/data/leftside/user-links.data'
import ToggleIcon from '@/shared/ui/icons/Toggle'
import Logo from '@/shared/ui/vectors/Logo'
import useLogout from '@/widgets/shared/hooks/useLogout'

import styles from './LeftSideBar.module.scss'

interface Props {
  links: TUserLinks | TAdminLinks | TMemberLinks
}

const LeftSideBar = ({ links }: Props) => {
  const [isOpen, setIsOpen] = useState(false)

  const { logout, isLoading } = useLogout()

  const router = useRouter()

  const t = useTranslations()

  return (
    <div className={styles.leftside}>
      <div
        className={styles.toggleIcon}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <ToggleIcon />
      </div>
      <AnimatePresence mode="wait">
        {isOpen && (
          <>
            <motion.div
              className={styles.items}
              exit={{ opacity: 0 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <div className={styles.logo}>
                <Logo size={230} />
              </div>

              <ul className={styles.links}>
                {links.map((item) => (
                  <li key={item.id}>
                    {item.id === 'logout' ? (
                      <button
                        className={
                          isLoading ? styles.link_loading : styles.link
                        }
                        onClick={() => logout()}
                        disabled={isLoading}
                      >
                        <span>{item.icon}</span>
                        <span className={styles.label}>
                          {isLoading ? t('auth.logout.loading') : t(item.label)}
                        </span>
                      </button>
                    ) : (
                      <>
                        <button
                          className={
                            isLoading ? styles.link_loading : styles.link
                          }
                          onClick={() => router.push(item.href)}
                        >
                          <span>{item.icon}</span>
                          <span className={styles.label}>{t(item.label)}</span>
                        </button>
                      </>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              style={{
                width: isOpen ? '100vw' : 0,
                height: isOpen ? '100vh' : 0,
              }}
              exit={{ opacity: 0 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className={styles.bg}
              onClick={() => setIsOpen(false)}
            />
          </>
        )}
      </AnimatePresence>
    </div>
  )
}

export default LeftSideBar
