import { AddJobForm } from '~/app/components/add-job-form'

/**
 * Job page that allows users to add a job.
 *
 * @returns {Promise<JSX.Element>} A promise that resolves to the add job page.
 */
export default async function AddJobPage() {
  return (
    <div>
      <h1>Add Job Page</h1>
      <AddJobForm />
    </div>
  )
}
