/*
  Warnings:

  - You are about to drop the column `clf_des` on the `AlumifranPrecos` table. All the data in the column will be lost.
  - You are about to drop the column `clf_ncm` on the `AlumifranPrecos` table. All the data in the column will be lost.
  - You are about to drop the column `comissao` on the `AlumifranPrecos` table. All the data in the column will be lost.
  - You are about to drop the column `proadc` on the `AlumifranPrecos` table. All the data in the column will be lost.
  - You are about to drop the column `proatinat` on the `AlumifranPrecos` table. All the data in the column will be lost.
  - You are about to drop the column `procapt` on the `AlumifranPrecos` table. All the data in the column will be lost.
  - You are about to drop the column `procest` on the `AlumifranPrecos` table. All the data in the column will be lost.
  - You are about to drop the column `procfv` on the `AlumifranPrecos` table. All the data in the column will be lost.
  - You are about to drop the column `procodipi` on the `AlumifranPrecos` table. All the data in the column will be lost.
  - You are about to drop the column `procofins` on the `AlumifranPrecos` table. All the data in the column will be lost.
  - You are about to drop the column `procop` on the `AlumifranPrecos` table. All the data in the column will be lost.
  - You are about to drop the column `procp1` on the `AlumifranPrecos` table. All the data in the column will be lost.
  - You are about to drop the column `procp2` on the `AlumifranPrecos` table. All the data in the column will be lost.
  - You are about to drop the column `procp3` on the `AlumifranPrecos` table. All the data in the column will be lost.
  - You are about to drop the column `procp4` on the `AlumifranPrecos` table. All the data in the column will be lost.
  - You are about to drop the column `procsosn` on the `AlumifranPrecos` table. All the data in the column will be lost.
  - You are about to drop the column `procus` on the `AlumifranPrecos` table. All the data in the column will be lost.
  - You are about to drop the column `prodes` on the `AlumifranPrecos` table. All the data in the column will be lost.
  - You are about to drop the column `prodescon` on the `AlumifranPrecos` table. All the data in the column will be lost.
  - You are about to drop the column `prodifimp` on the `AlumifranPrecos` table. All the data in the column will be lost.
  - You are about to drop the column `proemb` on the `AlumifranPrecos` table. All the data in the column will be lost.
  - You are about to drop the column `profin` on the `AlumifranPrecos` table. All the data in the column will be lost.
  - You are about to drop the column `profre` on the `AlumifranPrecos` table. All the data in the column will be lost.
  - You are about to drop the column `proicm` on the `AlumifranPrecos` table. All the data in the column will be lost.
  - You are about to drop the column `proipe` on the `AlumifranPrecos` table. All the data in the column will be lost.
  - You are about to drop the column `proipecus` on the `AlumifranPrecos` table. All the data in the column will be lost.
  - You are about to drop the column `proipf` on the `AlumifranPrecos` table. All the data in the column will be lost.
  - You are about to drop the column `proipi` on the `AlumifranPrecos` table. All the data in the column will be lost.
  - You are about to drop the column `prolotvd` on the `AlumifranPrecos` table. All the data in the column will be lost.
  - You are about to drop the column `promar` on the `AlumifranPrecos` table. All the data in the column will be lost.
  - You are about to drop the column `proorig` on the `AlumifranPrecos` table. All the data in the column will be lost.
  - You are about to drop the column `propdc` on the `AlumifranPrecos` table. All the data in the column will be lost.
  - You are about to drop the column `propdv` on the `AlumifranPrecos` table. All the data in the column will be lost.
  - You are about to drop the column `propeso` on the `AlumifranPrecos` table. All the data in the column will be lost.
  - You are about to drop the column `proqmi` on the `AlumifranPrecos` table. All the data in the column will be lost.
  - You are about to drop the column `proref` on the `AlumifranPrecos` table. All the data in the column will be lost.
  - You are about to drop the column `prorent` on the `AlumifranPrecos` table. All the data in the column will be lost.
  - You are about to drop the column `prosit` on the `AlumifranPrecos` table. All the data in the column will be lost.
  - You are about to drop the column `prouni` on the `AlumifranPrecos` table. All the data in the column will be lost.
  - The `procod` column on the `AlumifranPrecos` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `propcv` column on the `AlumifranPrecos` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "AlumifranPrecos" DROP COLUMN "clf_des",
DROP COLUMN "clf_ncm",
DROP COLUMN "comissao",
DROP COLUMN "proadc",
DROP COLUMN "proatinat",
DROP COLUMN "procapt",
DROP COLUMN "procest",
DROP COLUMN "procfv",
DROP COLUMN "procodipi",
DROP COLUMN "procofins",
DROP COLUMN "procop",
DROP COLUMN "procp1",
DROP COLUMN "procp2",
DROP COLUMN "procp3",
DROP COLUMN "procp4",
DROP COLUMN "procsosn",
DROP COLUMN "procus",
DROP COLUMN "prodes",
DROP COLUMN "prodescon",
DROP COLUMN "prodifimp",
DROP COLUMN "proemb",
DROP COLUMN "profin",
DROP COLUMN "profre",
DROP COLUMN "proicm",
DROP COLUMN "proipe",
DROP COLUMN "proipecus",
DROP COLUMN "proipf",
DROP COLUMN "proipi",
DROP COLUMN "prolotvd",
DROP COLUMN "promar",
DROP COLUMN "proorig",
DROP COLUMN "propdc",
DROP COLUMN "propdv",
DROP COLUMN "propeso",
DROP COLUMN "proqmi",
DROP COLUMN "proref",
DROP COLUMN "prorent",
DROP COLUMN "prosit",
DROP COLUMN "prouni",
DROP COLUMN "procod",
ADD COLUMN     "procod" INTEGER,
DROP COLUMN "propcv",
ADD COLUMN     "propcv" DOUBLE PRECISION,
ALTER COLUMN "prodesc" DROP NOT NULL;
