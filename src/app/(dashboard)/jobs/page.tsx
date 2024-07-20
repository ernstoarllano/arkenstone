import { JobsTable } from '~/app/components/jobs-table'

import { api } from '~/trpc/server'

/**
 * Job page that lists all jobs.
 *
 * @returns {Promise<JSX.Element>} A promise that resolves to the job page.
 */
export default async function JobPage() {
  const jobs = await api.job.list()

  return (
    <div>
      <h1>Job Page</h1>
      <JobsTable jobs={jobs} />
    </div>
  )
}
