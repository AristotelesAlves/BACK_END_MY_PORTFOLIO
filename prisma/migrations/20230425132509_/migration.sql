/*
  Warnings:

  - You are about to drop the column `title` on the `visita` table. All the data in the column will be lost.
  - Added the required column `pagina` to the `visita` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_visita" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "data" DATETIME NOT NULL,
    "pagina" INTEGER NOT NULL,
    "message" TEXT NOT NULL
);
INSERT INTO "new_visita" ("data", "id", "image", "message", "name") SELECT "data", "id", "image", "message", "name" FROM "visita";
DROP TABLE "visita";
ALTER TABLE "new_visita" RENAME TO "visita";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
