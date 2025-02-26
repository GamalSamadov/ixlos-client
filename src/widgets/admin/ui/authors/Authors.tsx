'use client'

import clsx from 'clsx'
import { Plus } from 'lucide-react'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { FC } from 'react'

import { Collapse } from '@/entities/shared/ui'
import { SearchInput } from '@/features/search-input'
import { ShowMore } from '@/features/show-more'
import { GetAllAuthorsQuery, UserModel } from '@/graphql/generated/output'
import { ADMIN_PAGES, USER_PAGES } from '@/shared/config/pages'
import { useTake } from '@/shared/hooks/useTake'
import { Avatar, Button, DashboardTable } from '@/shared/ui'
import { IDashboardTableBaseData } from '@/shared/ui/table/types/dashboard-table.types'
import styles from '@/widgets/admin/styles/admin-widget.module.scss'

interface IUsersTable
  extends Pick<UserModel, 'email' | 'displayName' | 'avatar' | 'id'>,
    IDashboardTableBaseData {}

interface Props {
  authors: GetAllAuthorsQuery['getAllAuthors']['authors']
  hasMore: GetAllAuthorsQuery['getAllAuthors']['hasMore']
  loading: boolean
}

export const Authors: FC<Props> = ({ authors, hasMore, loading }) => {
  const t = useTranslations('admin.authors')
  const tShared = useTranslations('shared')
  const { handleTake, resetTake } = useTake(ADMIN_PAGES.AUTHORS)

  return (
    <section
      className={clsx(
        styles.container,
        authors.length < 10 && 'h_screen_with_header'
      )}
    >
      <div className={styles.top}>
        <Link href={ADMIN_PAGES.ADD_AUTHORS}>
          <Button variant="primary">
            <Plus /> {t('addButton')}
          </Button>
        </Link>
      </div>
      <div className={clsx(styles.bottom, 'bg_gray_custom')}>
        <div className={styles['search-container']}>
          <h1 className="hidden text-lg font-bold md:block">
            {t('search.title')}
          </h1>
          <SearchInput
            route={ADMIN_PAGES.AUTHORS}
            name="authors-search"
            placeholder={t('search.placeholder')}
          />
        </div>
        <DashboardTable<IUsersTable>
          headerActions={[t('table.action')]}
          columns={[
            {
              title: t('table.avatar'),
              dataIndex: 'avatar',
              render: (record) => (
                <Link href={USER_PAGES.PROFILE_BY_ID(record.id)}>
                  <Avatar
                    size={40}
                    avatar={record.avatar}
                    displayName={record.displayName}
                    username={record.email}
                  />
                </Link>
              ),
            },
            {
              title: t('table.email'),
              dataIndex: 'email',
              render: (record) => record.email,
            },
            {
              title: t('table.name'),
              dataIndex: 'displayName',
              render: (record) => record.displayName,
            },
          ]}
          data={
            authors?.map(({ user }) => ({
              id: user.id,
              avatar: user.avatar,
              email: user.email,
              displayName: user.displayName,
              actionUrl: USER_PAGES.PROFILE_BY_ID(user.id),
            })) || []
          }
        />
        {hasMore ? (
          <ShowMore
            onClick={handleTake}
            title={tShared('loadMore')}
            loading={loading}
          />
        ) : (
          authors.length > 10 && (
            <Collapse
              onClick={resetTake}
              title={tShared('collapse')}
              loading={loading}
            />
          )
        )}
      </div>
    </section>
  )
}
