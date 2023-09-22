/*
  Warnings:

  - You are about to alter the column `propcv` on the `AlumifranPrecos` table. The data in that column could be lost. The data in that column will be cast from `Decimal(10,2)` to `DoublePrecision`.
  - Added the required column `clf_des` to the `AlumifranPrecos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `clf_ncm` to the `AlumifranPrecos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `comissao` to the `AlumifranPrecos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `proadc` to the `AlumifranPrecos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `proatinat` to the `AlumifranPrecos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `procapt` to the `AlumifranPrecos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `procest` to the `AlumifranPrecos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `procfv` to the `AlumifranPrecos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `procodipi` to the `AlumifranPrecos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `procofins` to the `AlumifranPrecos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `procop` to the `AlumifranPrecos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `procp1` to the `AlumifranPrecos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `procp2` to the `AlumifranPrecos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `procp3` to the `AlumifranPrecos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `procp4` to the `AlumifranPrecos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `procsosn` to the `AlumifranPrecos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `procus` to the `AlumifranPrecos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `prodesc` to the `AlumifranPrecos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `prodescon` to the `AlumifranPrecos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `prodifimp` to the `AlumifranPrecos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `proemb` to the `AlumifranPrecos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `profin` to the `AlumifranPrecos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `profre` to the `AlumifranPrecos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `proicm` to the `AlumifranPrecos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `proipe` to the `AlumifranPrecos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `proipecus` to the `AlumifranPrecos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `proipf` to the `AlumifranPrecos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `proipi` to the `AlumifranPrecos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `prolotvd` to the `AlumifranPrecos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `promar` to the `AlumifranPrecos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `proorig` to the `AlumifranPrecos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `propdc` to the `AlumifranPrecos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `propdv` to the `AlumifranPrecos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `propeso` to the `AlumifranPrecos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `propis` to the `AlumifranPrecos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `proqmi` to the `AlumifranPrecos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `proref` to the `AlumifranPrecos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `prorent` to the `AlumifranPrecos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `prosit` to the `AlumifranPrecos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `prostipi` to the `AlumifranPrecos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `prouni` to the `AlumifranPrecos` table without a default value. This is not possible if the table is not empty.
  - Made the column `procod` on table `AlumifranPrecos` required. This step will fail if there are existing NULL values in that column.
  - Made the column `prodes` on table `AlumifranPrecos` required. This step will fail if there are existing NULL values in that column.
  - Made the column `propcv` on table `AlumifranPrecos` required. This step will fail if there are existing NULL values in that column.

*/
-- DropIndex
DROP INDEX "AlumifranPrecos_procod_key";

-- AlterTable
ALTER TABLE "AlumifranPrecos" ADD COLUMN     "clf_des" TEXT NOT NULL,
ADD COLUMN     "clf_ncm" TEXT NOT NULL,
ADD COLUMN     "comissao" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "proadc" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "proatinat" BOOLEAN NOT NULL,
ADD COLUMN     "procapt" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "procest" TEXT NOT NULL,
ADD COLUMN     "procfv" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "procodipi" TEXT NOT NULL,
ADD COLUMN     "procofins" TEXT NOT NULL,
ADD COLUMN     "procop" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "procp1" TEXT NOT NULL,
ADD COLUMN     "procp2" TEXT NOT NULL,
ADD COLUMN     "procp3" TEXT NOT NULL,
ADD COLUMN     "procp4" TEXT NOT NULL,
ADD COLUMN     "procsosn" TEXT NOT NULL,
ADD COLUMN     "procus" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "prodesc" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "prodescon" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "prodifimp" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "proemb" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "profin" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "profre" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "proicm" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "proipe" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "proipecus" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "proipf" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "proipi" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "prolotvd" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "promar" TEXT NOT NULL,
ADD COLUMN     "proorig" TEXT NOT NULL,
ADD COLUMN     "propdc" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "propdv" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "propeso" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "propis" TEXT NOT NULL,
ADD COLUMN     "proqmi" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "proref" TEXT NOT NULL,
ADD COLUMN     "prorent" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "prosit" TEXT NOT NULL,
ADD COLUMN     "prostipi" TEXT NOT NULL,
ADD COLUMN     "prouni" TEXT NOT NULL,
ALTER COLUMN "procod" SET NOT NULL,
ALTER COLUMN "prodes" SET NOT NULL,
ALTER COLUMN "propcv" SET NOT NULL,
ALTER COLUMN "propcv" SET DATA TYPE DOUBLE PRECISION;
