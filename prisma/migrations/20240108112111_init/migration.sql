/*
  Warnings:

  - You are about to drop the `body` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `eyebrows` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `eyebrows_style` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `eyes` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `eyes_style` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `hair` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `hair_style` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `mouth` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `mouth_style` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `user` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "body" DROP CONSTRAINT "body_hair_id_fkey";

-- DropForeignKey
ALTER TABLE "body" DROP CONSTRAINT "body_user_id_fkey";

-- DropForeignKey
ALTER TABLE "eyebrows" DROP CONSTRAINT "eyebrows_id_fkey";

-- DropForeignKey
ALTER TABLE "eyebrows" DROP CONSTRAINT "eyebrows_style_id_fkey";

-- DropForeignKey
ALTER TABLE "eyes" DROP CONSTRAINT "eyes_id_fkey";

-- DropForeignKey
ALTER TABLE "eyes" DROP CONSTRAINT "eyes_style_id_fkey";

-- DropForeignKey
ALTER TABLE "hair" DROP CONSTRAINT "hair_style_id_fkey";

-- DropForeignKey
ALTER TABLE "mouth" DROP CONSTRAINT "mouth_id_fkey";

-- DropForeignKey
ALTER TABLE "mouth" DROP CONSTRAINT "mouth_style_id_fkey";

-- DropTable
DROP TABLE "body";

-- DropTable
DROP TABLE "eyebrows";

-- DropTable
DROP TABLE "eyebrows_style";

-- DropTable
DROP TABLE "eyes";

-- DropTable
DROP TABLE "eyes_style";

-- DropTable
DROP TABLE "hair";

-- DropTable
DROP TABLE "hair_style";

-- DropTable
DROP TABLE "mouth";

-- DropTable
DROP TABLE "mouth_style";

-- DropTable
DROP TABLE "user";

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "gender" INTEGER NOT NULL,
    "birthday" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deleteflg" INTEGER NOT NULL DEFAULT 0,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Body" (
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

    CONSTRAINT "Body_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Hair" (
    "id" SERIAL NOT NULL,
    "part_id" INTEGER NOT NULL,
    "style_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deleteflg" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "Hair_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Hair_style" (
    "id" SERIAL NOT NULL,
    "fill" TEXT NOT NULL,

    CONSTRAINT "Hair_style_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Eyebrows" (
    "id" SERIAL NOT NULL,
    "part_id" INTEGER NOT NULL,
    "style_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deleteflg" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "Eyebrows_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Eyebrows_style" (
    "id" SERIAL NOT NULL,
    "fill" TEXT NOT NULL,
    "scale" INTEGER NOT NULL,
    "leftTranslateX" INTEGER NOT NULL,
    "rightTranslateX" INTEGER NOT NULL,
    "translateY" INTEGER NOT NULL,
    "leftRotate" INTEGER NOT NULL,
    "rightRotate" INTEGER NOT NULL,

    CONSTRAINT "Eyebrows_style_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Eyes" (
    "id" SERIAL NOT NULL,
    "part_id" INTEGER NOT NULL,
    "style_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deleteflg" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "Eyes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Eyes_style" (
    "id" SERIAL NOT NULL,
    "fill" TEXT NOT NULL,
    "scale" INTEGER NOT NULL,
    "leftTranslateX" INTEGER NOT NULL,
    "rightTranslateX" INTEGER NOT NULL,
    "translateY" INTEGER NOT NULL,
    "leftRotate" INTEGER NOT NULL,
    "rightRotate" INTEGER NOT NULL,

    CONSTRAINT "Eyes_style_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Mouth" (
    "id" SERIAL NOT NULL,
    "part_id" INTEGER NOT NULL,
    "style_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deleteflg" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "Mouth_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Mouth_style" (
    "id" SERIAL NOT NULL,
    "fill" TEXT NOT NULL,
    "translateY" INTEGER NOT NULL,

    CONSTRAINT "Mouth_style_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Body_hair_id_key" ON "Body"("hair_id");

-- CreateIndex
CREATE UNIQUE INDEX "Body_eyebrows_id_key" ON "Body"("eyebrows_id");

-- CreateIndex
CREATE UNIQUE INDEX "Body_eyes_id_key" ON "Body"("eyes_id");

-- CreateIndex
CREATE UNIQUE INDEX "Body_mouth_id_key" ON "Body"("mouth_id");

-- CreateIndex
CREATE UNIQUE INDEX "Hair_style_id_key" ON "Hair"("style_id");

-- CreateIndex
CREATE UNIQUE INDEX "Eyebrows_style_id_key" ON "Eyebrows"("style_id");

-- CreateIndex
CREATE UNIQUE INDEX "Eyes_style_id_key" ON "Eyes"("style_id");

-- CreateIndex
CREATE UNIQUE INDEX "Mouth_style_id_key" ON "Mouth"("style_id");

-- AddForeignKey
ALTER TABLE "Body" ADD CONSTRAINT "Body_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Hair" ADD CONSTRAINT "Hair_style_id_fkey" FOREIGN KEY ("style_id") REFERENCES "Hair_style"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Hair" ADD CONSTRAINT "Hair_id_fkey" FOREIGN KEY ("id") REFERENCES "Body"("hair_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Eyebrows" ADD CONSTRAINT "Eyebrows_style_id_fkey" FOREIGN KEY ("style_id") REFERENCES "Eyebrows_style"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Eyebrows" ADD CONSTRAINT "Eyebrows_id_fkey" FOREIGN KEY ("id") REFERENCES "Body"("eyebrows_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Eyes" ADD CONSTRAINT "Eyes_style_id_fkey" FOREIGN KEY ("style_id") REFERENCES "Eyes_style"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Eyes" ADD CONSTRAINT "Eyes_id_fkey" FOREIGN KEY ("id") REFERENCES "Body"("eyes_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Mouth" ADD CONSTRAINT "Mouth_style_id_fkey" FOREIGN KEY ("style_id") REFERENCES "Mouth_style"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Mouth" ADD CONSTRAINT "Mouth_id_fkey" FOREIGN KEY ("id") REFERENCES "Body"("mouth_id") ON DELETE RESTRICT ON UPDATE CASCADE;
