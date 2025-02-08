'use client'

import { AnimatePresence, m } from 'framer-motion'
import { useRouter, usePathname } from 'next/navigation'
import { useTranslations } from 'next-intl'
import { useState } from 'react'

import { TAdminLinks } from '@/shared/data/leftside/admin-links.data'
import { TMemberLinks } from '@/shared/data/leftside/member-links.data'
import { TUserLinks } from '@/shared/data/leftside/user-links.data'
import Icon from '@/shared/ui/icons/Icon'
import Logo from '@/shared/ui/vectors/Logo'

import styles from './LeftSideBar.module.scss'

interface Props {
  links: TUserLinks | TAdminLinks | TMemberLinks
}

const LeftSideBar = ({ links }: Props) => {
  const [isOpen, setIsOpen] = useState(false)

  const router = useRouter()
  const pathName = usePathname()

  const t = useTranslations()

  return (
    <aside className={styles.leftside}>
      <div
        className={styles.toggleIcon}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <Icon size={35} variant="toggle" />
      </div>
      <AnimatePresence mode="wait">
        {isOpen && (
          <>
            <m.div
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
                    <button
                      className={
                        item.href === pathName
                          ? styles['active-link']
                          : styles.link
                      }
                      onClick={() => {
                        router.push(item.href)
                        setIsOpen(false)
                      }}
                    >
                      <span>{item.icon}</span>
                      <span className={styles.label}>{t(item.label)}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </m.div>
            <m.div
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
    </aside>
  )
}

export default LeftSideBar
