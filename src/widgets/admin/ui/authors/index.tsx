'use client'

import clsx from 'clsx'
import { Plus } from 'lucide-react'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { FC } from 'react'

import { Collapse } from '@/entities/shared/ui/collapse/Collapse'
import SearchInput from '@/entities/shared/ui/input/SearchInput'
import { ShowMore } from '@/entities/shared/ui/show-more/ShowMore'
import { GetAllAuthorsQuery, UserModel } from '@/graphql/generated/output'
import { ADMIN_PAGES } from '@/shared/config/pages/admin.config'
import { USER_PAGES } from '@/shared/config/pages/user.config'
import { useTake } from '@/shared/hooks/useTake'
import Avatar from '@/shared/ui/avatar/Avatar'
import Button from '@/shared/ui/buttons/Button'
import { IDashboardTableBaseData } from '@/shared/ui/table/dashboard-table.types'
import DashboardTable from '@/shared/ui/table/DashboardTable'
import styles from '@/widgets/admin/styles/admin-widget.module.scss'

interface IUsersTable
  extends Pick<UserModel, 'email' | 'displayName' | 'avatar' | 'id'>,
    IDashboardTableBaseData {}

interface Props {
  authors: GetAllAuthorsQuery['getAllAuthors']['authors']
  hasMore: GetAllAuthorsQuery['getAllAuthors']['hasMore']
  loading: boolean
}

const AuthorsWidget: FC<Props> = ({ authors, hasMore, loading }) => {
  const t = useTranslations('admin.authors')
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
        <SearchInput
          title={t('search.title')}
          route={ADMIN_PAGES.AUTHORS}
          name="Authors Search"
          type="text"
          placeholder={t('search.placeholder')}
        />
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
            title={t('loadMore')}
            loading={loading}
          />
        ) : (
          authors.length > 10 && (
            <Collapse
              onClick={resetTake}
              title={t('collapse')}
              loading={loading}
            />
          )
        )}
      </div>
    </section>
  )
}

export default AuthorsWidget
