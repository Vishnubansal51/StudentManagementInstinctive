-- AlterTable
ALTER TABLE "Student" ADD COLUMN     "courses" TEXT[] DEFAULT ARRAY['General']::TEXT[];
