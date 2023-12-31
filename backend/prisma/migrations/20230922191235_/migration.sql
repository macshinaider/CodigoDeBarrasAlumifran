-- CreateTable
CREATE TABLE "AlumifranPrecos" (
    "id" SERIAL NOT NULL,
    "procod" TEXT NOT NULL,
    "prodes" TEXT NOT NULL,
    "propcv" DECIMAL(10,2),
    "clf_des" TEXT,
    "clf_ncm" TEXT,
    "comissao" DOUBLE PRECISION,
    "proadc" DOUBLE PRECISION,
    "proatinat" BOOLEAN,
    "procapt" DOUBLE PRECISION,
    "procest" TEXT,
    "procfv" DOUBLE PRECISION,
    "procodipi" TEXT,
    "procofins" TEXT,
    "procop" DOUBLE PRECISION,
    "procp1" TEXT,
    "procp2" TEXT,
    "procp3" TEXT,
    "procp4" TEXT,
    "procsosn" TEXT,
    "procus" DOUBLE PRECISION,
    "prodesc" DOUBLE PRECISION,
    "prodescon" DOUBLE PRECISION,
    "prodifimp" DOUBLE PRECISION,
    "proemb" DOUBLE PRECISION,
    "profin" DOUBLE PRECISION,
    "profre" DOUBLE PRECISION,
    "proicm" DOUBLE PRECISION,
    "proipe" DOUBLE PRECISION,
    "proipecus" DOUBLE PRECISION,
    "proipf" DOUBLE PRECISION,
    "proipi" DOUBLE PRECISION,
    "prolotvd" DOUBLE PRECISION,
    "promar" TEXT,
    "proorig" TEXT,
    "propdc" DECIMAL(10,2),
    "propdv" DECIMAL(10,2),
    "propeso" DOUBLE PRECISION,
    "propis" TEXT,
    "proqmi" DOUBLE PRECISION,
    "proref" TEXT,
    "prorent" DOUBLE PRECISION,
    "prosit" TEXT,
    "prostipi" TEXT,
    "prouni" TEXT,

    CONSTRAINT "AlumifranPrecos_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "AlumifranPrecos_procod_key" ON "AlumifranPrecos"("procod");
