import { createTRPCRouter, publicProcedure } from '~/server/api/trpc'

import { jobSchema } from '~/server/api/routers/jobs/schema'

export const jobRouter = createTRPCRouter({
  create: publicProcedure.input(jobSchema).mutation(async ({ ctx, input }) => {
    return ctx.db.job.create({
      data: {
        company: input.company,
        appliedAt: input.appliedAt,
      },
    })
  }),
})
