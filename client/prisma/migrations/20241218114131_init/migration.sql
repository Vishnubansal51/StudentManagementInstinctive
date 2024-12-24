-- CreateTable
CREATE TABLE "Student" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "cohort" TEXT NOT NULL DEFAULT 'AY 2024-25',
    "dateJoined" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "lastLogin" TIMESTAMP(3) NOT NULL,
    "status" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "Student_pkey" PRIMARY KEY ("id")
);
