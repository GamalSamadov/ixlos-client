'use client'

import { useTranslations } from 'next-intl'

import styles from './DashboardTable.module.scss'
import { DashboardTableActions } from './DashboardTableActions'
import type {
  IDashboardTable,
  IDashboardTableBaseData,
} from '../types/dashboard-table.types'

export function DashboardTable<TData extends IDashboardTableBaseData>({
  columns,
  data,
  headerActions,
}: IDashboardTable<TData>) {
  const t = useTranslations('errors')
  return (
    <div className={styles.body_table_admin}>
      <table className={styles.table_admin}>
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column.title}>{column.title}</th>
            ))}
            {headerActions.map((column) => (
              <th key={column} className={styles.minWidth}>
                {column}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data.length ? (
            data.map((record, rowIndex) => (
              <tr key={rowIndex}>
                {columns.map((column) => {
                  return (
                    <td key={column.dataIndex.toString() + rowIndex}>
                      {column.render(record, rowIndex)}
                    </td>
                  )
                })}
                <DashboardTableActions<TData> baseRecord={record} />
              </tr>
            ))
          ) : (
            <tr className="hover:!bg-transparent">
              <td className="!border-r-0">{t('dataNotFound')}</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}
