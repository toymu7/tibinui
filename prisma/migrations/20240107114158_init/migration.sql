-- CreateTable
CREATE TABLE "user" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "date_of_birth" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deleteflg" TEXT NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "hairpart" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "bodypart_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deleteflg" TEXT NOT NULL,

    CONSTRAINT "hairpart_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "hair_part_style" (
    "id" SERIAL NOT NULL,
    "part_id" INTEGER NOT NULL,
    "fill" TEXT NOT NULL,

    CONSTRAINT "hair_part_style_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "eyebrowspart" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "bodypart_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deleteflg" TEXT NOT NULL,

    CONSTRAINT "eyebrowspart_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "eyebrows_part_style" (
    "id" SERIAL NOT NULL,
    "part_id" INTEGER NOT NULL,
    "fill" TEXT NOT NULL,
    "scale" INTEGER NOT NULL,
    "leftTranslateX" INTEGER NOT NULL,
    "rightTranslateX" INTEGER NOT NULL,
    "translateY" INTEGER NOT NULL,
    "leftRotate" INTEGER NOT NULL,
    "rightRotate" INTEGER NOT NULL,

    CONSTRAINT "eyebrows_part_style_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "eyespart" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "bodypart_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deleteflg" TEXT NOT NULL,

    CONSTRAINT "eyespart_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "eyes_part_style" (
    "id" SERIAL NOT NULL,
    "part_id" INTEGER NOT NULL,
    "fill" TEXT NOT NULL,
    "scale" INTEGER NOT NULL,
    "leftTranslateX" INTEGER NOT NULL,
    "rightTranslateX" INTEGER NOT NULL,
    "translateY" INTEGER NOT NULL,
    "leftRotate" INTEGER NOT NULL,
    "rightRotate" INTEGER NOT NULL,

    CONSTRAINT "eyes_part_style_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "mouthpart" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "bodypart_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deleteflg" TEXT NOT NULL,

    CONSTRAINT "mouthpart_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "mouth_part_style" (
    "id" SERIAL NOT NULL,
    "part_id" INTEGER NOT NULL,
    "fill" TEXT NOT NULL,
    "translateY" INTEGER NOT NULL,

    CONSTRAINT "mouth_part_style_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "bodypart" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "hairpart_id" INTEGER NOT NULL,
    "eyebrowspart_id" INTEGER NOT NULL,
    "eyespart_id" INTEGER NOT NULL,
    "mouthpart_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deleteflg" TEXT NOT NULL,

    CONSTRAINT "bodypart_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "hairpart" ADD CONSTRAINT "hairpart_bodypart_id_fkey" FOREIGN KEY ("bodypart_id") REFERENCES "bodypart"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "eyebrowspart" ADD CONSTRAINT "eyebrowspart_bodypart_id_fkey" FOREIGN KEY ("bodypart_id") REFERENCES "bodypart"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "eyespart" ADD CONSTRAINT "eyespart_bodypart_id_fkey" FOREIGN KEY ("bodypart_id") REFERENCES "bodypart"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "mouthpart" ADD CONSTRAINT "mouthpart_bodypart_id_fkey" FOREIGN KEY ("bodypart_id") REFERENCES "bodypart"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "bodypart" ADD CONSTRAINT "bodypart_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
