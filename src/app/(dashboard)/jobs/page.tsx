import { type ColumnDef } from '@tanstack/react-table'

import { DataTable } from '~/app/components/data-table'

import { api } from '~/trpc/server'
import { type JobType } from '~/types/models'

/**
 * Job page that lists all jobs.
 *
 * @returns {Promise<JSX.Element>} A promise that resolves to the job page.
 */
export default async function JobPage() {
  const jobs = await api.job.list()

  const columns: ColumnDef<JobType>[] = [
    {
      accessorKey: 'company',
      header: 'Company',
    },
    {
      accessorKey: 'appliedAt',
      header: 'Applied At',
    },
  ]

  return (
    <div>
      <h1>Job Page</h1>
      <DataTable columns={columns} data={jobs} />
    </div>
  )
}
