import { z } from 'zod'

const jobSchema = z.object({
  company: z.string().min(1),
  appliedAt: z.date(),
})

export const createJobSchema = jobSchema

export const editJobSchema = z
  .object({
    id: z.string().uuid(),
    rejectedAt: z.date().optional(),
    interviewAt: z.date().optional(),
    acceptedAt: z.date().optional(),
  })
  .merge(jobSchema)

export type JobCreateType = z.infer<typeof createJobSchema>
export type JobEditType = z.infer<typeof editJobSchema>
