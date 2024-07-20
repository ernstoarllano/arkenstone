'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'

import {
  type JobCreateType,
  createJobSchema,
} from '~/server/api/routers/jobs/schema'
import { api } from '~/trpc/react'

import { Form } from '~/app/components/form'
import { FormDatePicker } from '~/app/components/form-datepicker'
import { FormInput } from '~/app/components/form-input'
import { FormSubmit } from '~/app/components/form-submit'

/**
 * A react-hook-form to create a new job.
 *
 * @returns {JSX.Element} The add job form component.
 */
export function AddJobForm() {
  const { refresh } = useRouter()

  const form = useForm<JobCreateType>({
    defaultValues: {
      company: '',
      appliedAt: new Date(),
    },
    resolver: zodResolver(createJobSchema),
  })

  const { mutate } = api.job.create.useMutation()

  const handleSubmit = (data: JobCreateType) => {
    mutate(data, {
      onSuccess: () => {
        form.reset()
        refresh()
      },
    })
  }

  return (
    <Form form={form} onSubmit={handleSubmit}>
      <FormInput label="Company" name="company" />
      <FormDatePicker label="Applied At" name="appliedAt" />
      <FormSubmit value="Add Job" />
    </Form>
  )
}
