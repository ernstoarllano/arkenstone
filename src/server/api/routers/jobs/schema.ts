import { z } from "zod";

export const jobSchema = z.object({
  company: z.string().min(1),
  appliedAt: z.date(),
});

export type JobCreateType = z.infer<typeof jobSchema>;