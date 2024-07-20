-- CreateTable
CREATE TABLE "Job" (
    "id" UUID NOT NULL,
    "company" TEXT NOT NULL,
    "appliedAt" TIMESTAMP(3) NOT NULL,
    "rejectedAt" TIMESTAMP(3),
    "interviewAt" TIMESTAMP(3),
    "acceptedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Job_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Job_company_idx" ON "Job"("company");
