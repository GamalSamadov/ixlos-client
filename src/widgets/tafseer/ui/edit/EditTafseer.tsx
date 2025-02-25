'use client'

import clsx from 'clsx'
import { Plus } from 'lucide-react'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { FC } from 'react'

import { Collapse } from '@/entities/shared/ui'
import { SearchInput } from '@/features/search-input'
import { ShowMore } from '@/features/show-more'
import { GetAllTafseersQuery, TafseerModel } from '@/graphql/generated/output'
import { ADMIN_PAGES } from '@/shared/config/pages'
import { useTake } from '@/shared/hooks/useTake'
import { Button, DashboardTable } from '@/shared/ui'
import { IDashboardTableBaseData } from '@/shared/ui/table/types/dashboard-table.types'

import styles from './EditTafseer.module.scss'

interface IUsersTable
  extends Pick<TafseerModel, 'name' | 'arabicName' | 'id'>,
    IDashboardTableBaseData {}

interface Props {
  tafseers: GetAllTafseersQuery['getAllTafseers']['tafseers']
  hasMore: GetAllTafseersQuery['getAllTafseers']['hasMore']
  loading: boolean
}

export const EditTafseer: FC<Props> = ({ tafseers, hasMore, loading }) => {
  const t = useTranslations('admin.tafseers')
  const { handleTake, resetTake } = useTake(ADMIN_PAGES.EDIT_TAFSEER)
  return (
    <section
      className={clsx(
        styles.container,
        tafseers.length < 10 && 'h_screen_with_header'
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
            route={ADMIN_PAGES.EDIT_TAFSEER}
            name="tafseer-search"
            placeholder={t('search.placeholder')}
          />
        </div>
        <DashboardTable<IUsersTable>
          headerActions={[t('table.action')]}
          columns={[
            {
              title: t('table.name'),
              dataIndex: 'name',
              render: (record) => record.name,
            },
            {
              title: t('table.arabicName'),
              dataIndex: 'arabicName',
              render: (record) => record.arabicName,
            },
          ]}
          data={
            tafseers?.map((tafseer) => ({
              id: tafseer.id,
              name: tafseer.name,
              arabicName: tafseer.arabicName,
              actionUrl: '/',
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
          tafseers.length > 10 && (
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
