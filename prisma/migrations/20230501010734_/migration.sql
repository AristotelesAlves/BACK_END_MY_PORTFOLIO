/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `adm` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[password]` on the table `adm` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "adm_name_key" ON "adm"("name");

-- CreateIndex
CREATE UNIQUE INDEX "adm_password_key" ON "adm"("password");
