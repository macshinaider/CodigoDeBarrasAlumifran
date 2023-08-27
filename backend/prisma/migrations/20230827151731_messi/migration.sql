/*
  Warnings:

  - The `procod` column on the `AlumifranPrecos` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `propcv` column on the `AlumifranPrecos` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "AlumifranPrecos" DROP COLUMN "procod",
ADD COLUMN     "procod" INTEGER,
DROP COLUMN "propcv",
ADD COLUMN     "propcv" DOUBLE PRECISION;
