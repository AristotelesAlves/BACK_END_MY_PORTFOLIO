-- CreateTable
CREATE TABLE "visita" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "instagram" TEXT NOT NULL,
    "authorize" BOOLEAN NOT NULL,
    "data" TIMESTAMP(3) NOT NULL,
    "message" TEXT NOT NULL,

    CONSTRAINT "visita_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "post" (
    "id" SERIAL NOT NULL,
    "img" TEXT NOT NULL,
    "bio" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "demo" TEXT NOT NULL,
    "data" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "post_pkey" PRIMARY KEY ("id")
);
