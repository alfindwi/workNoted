/*
  Warnings:

  - You are about to drop the column `applicatonDate` on the `Company` table. All the data in the column will be lost.
  - Added the required column `applicationDate` to the `Company` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Company" DROP COLUMN "applicatonDate",
ADD COLUMN     "applicationDate" TIMESTAMP(3) NOT NULL;
