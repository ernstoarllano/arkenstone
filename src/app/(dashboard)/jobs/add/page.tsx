import { HydrateClient } from "~/trpc/server"

import { AddJobForm } from "~/app/ui/add-job-form"

export default async function AddJobPage() {
    return (
        <HydrateClient>
            <div>
                <h1>Add Job Page</h1>
                <AddJobForm />
            </div>
        </HydrateClient>
    )
}