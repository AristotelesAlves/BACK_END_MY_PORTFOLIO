/*
  Warnings:

  - Added the required column `data` to the `post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `github` to the `post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image` to the `post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `website` to the `post` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "adm" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_post" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "github" TEXT NOT NULL,
    "website" TEXT NOT NULL,
    "like" INTEGER NOT NULL,
    "data" DATETIME NOT NULL
);
INSERT INTO "new_post" ("id", "like") SELECT "id", "like" FROM "post";
DROP TABLE "post";
ALTER TABLE "new_post" RENAME TO "post";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
