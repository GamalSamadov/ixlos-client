'use client'

import { m } from 'framer-motion'
import { usePathname, useRouter } from 'next/navigation'
import { useTranslations } from 'next-intl'
import { PropsWithChildren, useState, useRef, useEffect } from 'react'

import Icon from '@/shared/ui/icons/Icon'
import useLogout from '@/widgets/shared/hooks/useLogout'

import { MENUS } from './data/avatar-menu-items.data'
import styles from './DropdownMenu.module.scss'
import { VARIANTS } from './menuAnimateVariants'

const DropDown = ({ children }: PropsWithChildren) => {
  const [isOpen, setIsOpen] = useState(false)

  const wrapperRef = useRef<HTMLDivElement>(null)

  const pathName = usePathname()

  const t = useTranslations('avatar')
  const { logout, isLoading } = useLogout()
  const router = useRouter()

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <m.div className={styles['menu-item']} ref={wrapperRef}>
      <div onClick={() => setIsOpen((prev) => !prev)}>{children}</div>
      <m.div
        className={styles['sub-menu']}
        initial="exit"
        animate={isOpen ? 'enter' : 'exit'}
        variants={VARIANTS}
      >
        <div className={styles['sub-menu-background']} />
        <div className={styles['sub-menu-container']}>
          {MENUS.map((menu) =>
            isLoading ? (
              <button className={styles['sub-menu-item-loading']} key={menu.id}>
                <Icon variant={menu.icon} size={15} />
                <span>{t(menu.title)}</span>
              </button>
            ) : (
              <button
                className={
                  pathName === menu.href
                    ? styles['active-sub-menu-item']
                    : styles['sub-menu-item']
                }
                key={menu.id}
                onClick={() => {
                  if (menu.id === 'logout') {
                    logout()
                  } else {
                    router.push(menu.href)
                  }
                  setIsOpen(false)
                }}
              >
                <Icon variant={menu.icon} size={20} />
                <span className={styles.title}>{t(menu.title)}</span>
              </button>
            )
          )}
        </div>
      </m.div>
    </m.div>
  )
}

export default DropDown
