-- CreateTable
CREATE TABLE "JobActivity" (
    "id" SERIAL NOT NULL,
    "date" TEXT NOT NULL,
    "activity" TEXT NOT NULL,
    "notes" TEXT,
    "companyId" INTEGER NOT NULL,

    CONSTRAINT "JobActivity_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "JobActivity" ADD CONSTRAINT "JobActivity_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE CASCADE ON UPDATE CASCADE;
