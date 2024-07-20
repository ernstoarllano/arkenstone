import { createTRPCRouter, publicProcedure } from '~/server/api/trpc'

import {
  createJobSchema,
  editJobSchema,
} from '~/server/api/routers/jobs/schema'

export const jobRouter = createTRPCRouter({
  create: publicProcedure
    .input(createJobSchema)
    .mutation(async ({ ctx, input }) => {
      return ctx.db.job.create({
        data: {
          company: input.company,
          appliedAt: input.appliedAt,
        },
      })
    }),

  list: publicProcedure.query(({ ctx }) => {
    return ctx.db.job.findMany({
      orderBy: { createdAt: 'desc' },
    })
  }),

  update: publicProcedure
    .input(editJobSchema)
    .mutation(async ({ ctx, input }) => {
      return ctx.db.job.update({
        where: { id: input.id },
        data: {
          company: input.company,
          appliedAt: input.appliedAt,
          rejectedAt: input.rejectedAt,
          interviewAt: input.interviewAt,
          acceptedAt: input.acceptedAt,
        },
      })
    }),
})
