import { type inferRouterOutputs } from '@trpc/server'

import { type AppRouter } from '~/server/api/root'

type ApiOutputs = inferRouterOutputs<AppRouter>

// Jobs
export type JobType = ApiOutputs['job']['list'][0]
