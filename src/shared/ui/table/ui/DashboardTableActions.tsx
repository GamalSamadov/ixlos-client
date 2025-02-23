import { LogInIcon, Trash2 } from 'lucide-react'
import Link from 'next/link'

import styles from './DashboardTable.module.scss'
import type { IDashboardTableBaseData } from '../types/dashboard-table.types'

export function DashboardTableActions<TData extends IDashboardTableBaseData>({
  baseRecord,
}: {
  baseRecord: TData
}) {
  const { deleteHandler, actionUrl } = baseRecord

  return (
    <>
      {actionUrl && (
        <td className={styles.minWidth}>
          <Link href={actionUrl} aria-label="Open edit page">
            <LogInIcon />
          </Link>
        </td>
      )}
      {deleteHandler && (
        <td className={styles.minWidth}>
          <button onClick={deleteHandler} aria-label="Delete">
            <Trash2 />
          </button>
        </td>
      )}
    </>
  )
}
