-- CreateTable
CREATE TABLE "visita" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "instagram" TEXT NOT NULL,
    "authorize" BOOLEAN NOT NULL,
    "data" DATETIME NOT NULL,
    "message" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "post" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "like" INTEGER NOT NULL
);
