import { EditJobForm } from '~/app/components/edit-job-form'

/**
 * Job page that allows users to edit a job.
 *
 * @returns {Promise<JSX.Element>} A promise that resolves to the edit job page.
 */
export default async function EditJobPage() {
  return (
    <div>
      <h1>Edit Job Page</h1>
      <EditJobForm />
    </div>
  )
}
