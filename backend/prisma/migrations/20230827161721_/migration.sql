/*
  Warnings:

  - The `propcv` column on the `AlumifranPrecos` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "AlumifranPrecos" DROP COLUMN "propcv",
ADD COLUMN     "propcv" DECIMAL(65,30);
