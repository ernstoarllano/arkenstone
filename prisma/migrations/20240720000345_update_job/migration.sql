/*
  Warnings:

  - Added the required column `appliedAt` to the `Job` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Job" ADD COLUMN     "acceptedAt" TIMESTAMP(3),
ADD COLUMN     "appliedAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "interviewAt" TIMESTAMP(3),
ADD COLUMN     "rejectedAt" TIMESTAMP(3);
