/*
  Warnings:

  - You are about to drop the `adm` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the column `description` on the `post` table. All the data in the column will be lost.
  - You are about to drop the column `github` on the `post` table. All the data in the column will be lost.
  - You are about to drop the column `image` on the `post` table. All the data in the column will be lost.
  - You are about to drop the column `like` on the `post` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `post` table. All the data in the column will be lost.
  - You are about to drop the column `website` on the `post` table. All the data in the column will be lost.
  - Added the required column `bio` to the `post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `code` to the `post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `demo` to the `post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `img` to the `post` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "adm_password_key";

-- DropIndex
DROP INDEX "adm_name_key";

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "adm";
PRAGMA foreign_keys=on;

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_post" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "img" TEXT NOT NULL,
    "bio" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "demo" TEXT NOT NULL,
    "data" DATETIME NOT NULL
);
INSERT INTO "new_post" ("data", "id") SELECT "data", "id" FROM "post";
DROP TABLE "post";
ALTER TABLE "new_post" RENAME TO "post";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
