/*
  Warnings:

  - You are about to drop the `Body` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Eyebrows` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `EyebrowsStyle` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Eyes` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `EyesStyle` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Hair` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `HairStyle` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Mouth` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `MouthStyle` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Body" DROP CONSTRAINT "Body_userId_fkey";

-- DropForeignKey
ALTER TABLE "Eyebrows" DROP CONSTRAINT "Eyebrows_id_fkey";

-- DropForeignKey
ALTER TABLE "EyebrowsStyle" DROP CONSTRAINT "EyebrowsStyle_id_fkey";

-- DropForeignKey
ALTER TABLE "Eyes" DROP CONSTRAINT "Eyes_id_fkey";

-- DropForeignKey
ALTER TABLE "EyesStyle" DROP CONSTRAINT "EyesStyle_id_fkey";

-- DropForeignKey
ALTER TABLE "Hair" DROP CONSTRAINT "Hair_id_fkey";

-- DropForeignKey
ALTER TABLE "HairStyle" DROP CONSTRAINT "HairStyle_id_fkey";

-- DropForeignKey
ALTER TABLE "Mouth" DROP CONSTRAINT "Mouth_id_fkey";

-- DropForeignKey
ALTER TABLE "MouthStyle" DROP CONSTRAINT "MouthStyle_id_fkey";

-- DropTable
DROP TABLE "Body";

-- DropTable
DROP TABLE "Eyebrows";

-- DropTable
DROP TABLE "EyebrowsStyle";

-- DropTable
DROP TABLE "Eyes";

-- DropTable
DROP TABLE "EyesStyle";

-- DropTable
DROP TABLE "Hair";

-- DropTable
DROP TABLE "HairStyle";

-- DropTable
DROP TABLE "Mouth";

-- DropTable
DROP TABLE "MouthStyle";

-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "user" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "gender" INTEGER NOT NULL,
    "birthday" TIMESTAMP(3) NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deleteflg" INTEGER NOT NULL DEFAULT 0,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "body" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "hair_id" INTEGER NOT NULL,
    "eyebrows_id" INTEGER NOT NULL,
    "eyes_id" INTEGER NOT NULL,
    "mouth_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deleteflg" INTEGER NOT NULL DEFAULT 0,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "body_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "hair" (
    "id" SERIAL NOT NULL,
    "part_id" INTEGER NOT NULL,
    "style_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deleteflg" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "hair_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "hair_style" (
    "id" SERIAL NOT NULL,
    "fill" TEXT NOT NULL,

    CONSTRAINT "hair_style_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "eyebrows" (
    "id" SERIAL NOT NULL,
    "part_id" INTEGER NOT NULL,
    "style_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deleteflg" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "eyebrows_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "eyebrows_style" (
    "id" SERIAL NOT NULL,
    "fill" TEXT NOT NULL,
    "scale" INTEGER NOT NULL,
    "leftTranslateX" INTEGER NOT NULL,
    "rightTranslateX" INTEGER NOT NULL,
    "translateY" INTEGER NOT NULL,
    "leftRotate" INTEGER NOT NULL,
    "rightRotate" INTEGER NOT NULL,

    CONSTRAINT "eyebrows_style_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "eyes" (
    "id" SERIAL NOT NULL,
    "part_id" INTEGER NOT NULL,
    "style_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deleteflg" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "eyes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "eyes_style" (
    "id" SERIAL NOT NULL,
    "fill" TEXT NOT NULL,
    "scale" INTEGER NOT NULL,
    "leftTranslateX" INTEGER NOT NULL,
    "rightTranslateX" INTEGER NOT NULL,
    "translateY" INTEGER NOT NULL,
    "leftRotate" INTEGER NOT NULL,
    "rightRotate" INTEGER NOT NULL,

    CONSTRAINT "eyes_style_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "mouth" (
    "id" SERIAL NOT NULL,
    "part_id" INTEGER NOT NULL,
    "style_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deleteflg" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "mouth_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "mouth_style" (
    "id" SERIAL NOT NULL,
    "fill" TEXT NOT NULL,
    "translateY" INTEGER NOT NULL,

    CONSTRAINT "mouth_style_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "body_hair_id_key" ON "body"("hair_id");

-- CreateIndex
CREATE UNIQUE INDEX "body_eyebrows_id_key" ON "body"("eyebrows_id");

-- CreateIndex
CREATE UNIQUE INDEX "body_eyes_id_key" ON "body"("eyes_id");

-- CreateIndex
CREATE UNIQUE INDEX "body_mouth_id_key" ON "body"("mouth_id");

-- CreateIndex
CREATE UNIQUE INDEX "hair_style_id_key" ON "hair"("style_id");

-- CreateIndex
CREATE UNIQUE INDEX "eyebrows_style_id_key" ON "eyebrows"("style_id");

-- CreateIndex
CREATE UNIQUE INDEX "eyes_style_id_key" ON "eyes"("style_id");

-- CreateIndex
CREATE UNIQUE INDEX "mouth_style_id_key" ON "mouth"("style_id");

-- AddForeignKey
ALTER TABLE "body" ADD CONSTRAINT "body_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "hair" ADD CONSTRAINT "hair_id_fkey" FOREIGN KEY ("id") REFERENCES "body"("hair_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "hair_style" ADD CONSTRAINT "hair_style_id_fkey" FOREIGN KEY ("id") REFERENCES "hair"("style_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "eyebrows" ADD CONSTRAINT "eyebrows_id_fkey" FOREIGN KEY ("id") REFERENCES "body"("hair_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "eyebrows_style" ADD CONSTRAINT "eyebrows_style_id_fkey" FOREIGN KEY ("id") REFERENCES "eyebrows"("style_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "eyes" ADD CONSTRAINT "eyes_id_fkey" FOREIGN KEY ("id") REFERENCES "body"("hair_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "eyes_style" ADD CONSTRAINT "eyes_style_id_fkey" FOREIGN KEY ("id") REFERENCES "eyes"("style_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "mouth" ADD CONSTRAINT "mouth_id_fkey" FOREIGN KEY ("id") REFERENCES "body"("hair_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "mouth_style" ADD CONSTRAINT "mouth_style_id_fkey" FOREIGN KEY ("id") REFERENCES "mouth"("style_id") ON DELETE RESTRICT ON UPDATE CASCADE;
