/*
  Warnings:

  - You are about to drop the `bodypart` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `eyebrows_part_style` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `eyebrowspart` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `eyes_part_style` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `eyespart` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `hair_part_style` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `hairpart` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `mouth_part_style` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `mouthpart` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `user` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "bodypart" DROP CONSTRAINT "bodypart_user_id_fkey";

-- DropForeignKey
ALTER TABLE "eyebrowspart" DROP CONSTRAINT "eyebrowspart_bodypart_id_fkey";

-- DropForeignKey
ALTER TABLE "eyespart" DROP CONSTRAINT "eyespart_bodypart_id_fkey";

-- DropForeignKey
ALTER TABLE "hairpart" DROP CONSTRAINT "hairpart_bodypart_id_fkey";

-- DropForeignKey
ALTER TABLE "mouthpart" DROP CONSTRAINT "mouthpart_bodypart_id_fkey";

-- DropTable
DROP TABLE "bodypart";

-- DropTable
DROP TABLE "eyebrows_part_style";

-- DropTable
DROP TABLE "eyebrowspart";

-- DropTable
DROP TABLE "eyes_part_style";

-- DropTable
DROP TABLE "eyespart";

-- DropTable
DROP TABLE "hair_part_style";

-- DropTable
DROP TABLE "hairpart";

-- DropTable
DROP TABLE "mouth_part_style";

-- DropTable
DROP TABLE "mouthpart";

-- DropTable
DROP TABLE "user";

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "gender" INTEGER NOT NULL,
    "birthday" TIMESTAMP(3) NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deleteflg" INTEGER NOT NULL,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Body" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "hairId" INTEGER NOT NULL,
    "eyebrowsId" INTEGER NOT NULL,
    "eyesId" INTEGER NOT NULL,
    "mouthId" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleteflg" INTEGER NOT NULL,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "Body_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Hair" (
    "id" SERIAL NOT NULL,
    "partId" INTEGER NOT NULL,
    "styleId" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deleteflg" INTEGER NOT NULL,

    CONSTRAINT "Hair_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "HairStyle" (
    "id" SERIAL NOT NULL,
    "fill" TEXT NOT NULL,

    CONSTRAINT "HairStyle_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Eyebrows" (
    "id" SERIAL NOT NULL,
    "partId" INTEGER NOT NULL,
    "styleId" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deleteflg" INTEGER NOT NULL,

    CONSTRAINT "Eyebrows_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EyebrowsStyle" (
    "id" SERIAL NOT NULL,
    "fill" TEXT NOT NULL,
    "scale" INTEGER NOT NULL,
    "leftTranslateX" INTEGER NOT NULL,
    "rightTranslateX" INTEGER NOT NULL,
    "translateY" INTEGER NOT NULL,
    "leftRotate" INTEGER NOT NULL,
    "rightRotate" INTEGER NOT NULL,

    CONSTRAINT "EyebrowsStyle_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Eyes" (
    "id" SERIAL NOT NULL,
    "partId" INTEGER NOT NULL,
    "styleId" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deleteflg" INTEGER NOT NULL,

    CONSTRAINT "Eyes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EyesStyle" (
    "id" SERIAL NOT NULL,
    "fill" TEXT NOT NULL,
    "scale" INTEGER NOT NULL,
    "leftTranslateX" INTEGER NOT NULL,
    "rightTranslateX" INTEGER NOT NULL,
    "translateY" INTEGER NOT NULL,
    "leftRotate" INTEGER NOT NULL,
    "rightRotate" INTEGER NOT NULL,

    CONSTRAINT "EyesStyle_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Mouth" (
    "id" SERIAL NOT NULL,
    "partId" INTEGER NOT NULL,
    "styleId" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deleteflg" INTEGER NOT NULL,

    CONSTRAINT "Mouth_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MouthStyle" (
    "id" SERIAL NOT NULL,
    "fill" TEXT NOT NULL,
    "translateY" INTEGER NOT NULL,

    CONSTRAINT "MouthStyle_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Body_hairId_key" ON "Body"("hairId");

-- CreateIndex
CREATE UNIQUE INDEX "Body_eyebrowsId_key" ON "Body"("eyebrowsId");

-- CreateIndex
CREATE UNIQUE INDEX "Body_eyesId_key" ON "Body"("eyesId");

-- CreateIndex
CREATE UNIQUE INDEX "Body_mouthId_key" ON "Body"("mouthId");

-- CreateIndex
CREATE UNIQUE INDEX "Hair_styleId_key" ON "Hair"("styleId");

-- CreateIndex
CREATE UNIQUE INDEX "Eyebrows_styleId_key" ON "Eyebrows"("styleId");

-- CreateIndex
CREATE UNIQUE INDEX "Eyes_styleId_key" ON "Eyes"("styleId");

-- CreateIndex
CREATE UNIQUE INDEX "Mouth_styleId_key" ON "Mouth"("styleId");

-- AddForeignKey
ALTER TABLE "Body" ADD CONSTRAINT "Body_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Hair" ADD CONSTRAINT "Hair_id_fkey" FOREIGN KEY ("id") REFERENCES "Body"("hairId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HairStyle" ADD CONSTRAINT "HairStyle_id_fkey" FOREIGN KEY ("id") REFERENCES "Hair"("styleId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Eyebrows" ADD CONSTRAINT "Eyebrows_id_fkey" FOREIGN KEY ("id") REFERENCES "Body"("hairId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EyebrowsStyle" ADD CONSTRAINT "EyebrowsStyle_id_fkey" FOREIGN KEY ("id") REFERENCES "Eyebrows"("styleId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Eyes" ADD CONSTRAINT "Eyes_id_fkey" FOREIGN KEY ("id") REFERENCES "Body"("hairId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EyesStyle" ADD CONSTRAINT "EyesStyle_id_fkey" FOREIGN KEY ("id") REFERENCES "Eyes"("styleId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Mouth" ADD CONSTRAINT "Mouth_id_fkey" FOREIGN KEY ("id") REFERENCES "Body"("hairId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MouthStyle" ADD CONSTRAINT "MouthStyle_id_fkey" FOREIGN KEY ("id") REFERENCES "Mouth"("styleId") ON DELETE RESTRICT ON UPDATE CASCADE;
