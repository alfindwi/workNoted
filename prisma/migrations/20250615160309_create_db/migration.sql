-- CreateEnum
CREATE TYPE "Status" AS ENUM ('Applied', 'Interview', 'Rejeceted');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Company" (
    "id" SERIAL NOT NULL,
    "companyName" TEXT NOT NULL,
    "position" TEXT NOT NULL,
    "applicatonDate" TIMESTAMP(3) NOT NULL,
    "applicationMethod" TEXT NOT NULL,
    "status" "Status" NOT NULL DEFAULT 'Applied',

    CONSTRAINT "Company_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
