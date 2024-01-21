-- DropForeignKey
ALTER TABLE "Eyebrows" DROP CONSTRAINT "Eyebrows_id_fkey";

-- DropForeignKey
ALTER TABLE "Eyebrows_style" DROP CONSTRAINT "Eyebrows_style_id_fkey";

-- DropForeignKey
ALTER TABLE "Eyes" DROP CONSTRAINT "Eyes_id_fkey";

-- DropForeignKey
ALTER TABLE "Eyes_style" DROP CONSTRAINT "Eyes_style_id_fkey";

-- DropForeignKey
ALTER TABLE "Hair" DROP CONSTRAINT "Hair_id_fkey";

-- DropForeignKey
ALTER TABLE "Hair_style" DROP CONSTRAINT "Hair_style_id_fkey";

-- DropForeignKey
ALTER TABLE "Mouth" DROP CONSTRAINT "Mouth_id_fkey";

-- DropForeignKey
ALTER TABLE "Mouth_style" DROP CONSTRAINT "Mouth_style_id_fkey";

-- AddForeignKey
ALTER TABLE "Body" ADD CONSTRAINT "Body_hair_id_fkey" FOREIGN KEY ("hair_id") REFERENCES "Hair"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Body" ADD CONSTRAINT "Body_eyebrows_id_fkey" FOREIGN KEY ("eyebrows_id") REFERENCES "Eyebrows"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Body" ADD CONSTRAINT "Body_eyes_id_fkey" FOREIGN KEY ("eyes_id") REFERENCES "Eyes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Body" ADD CONSTRAINT "Body_mouth_id_fkey" FOREIGN KEY ("mouth_id") REFERENCES "Mouth"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Hair" ADD CONSTRAINT "Hair_style_id_fkey" FOREIGN KEY ("style_id") REFERENCES "Hair_style"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Eyebrows" ADD CONSTRAINT "Eyebrows_style_id_fkey" FOREIGN KEY ("style_id") REFERENCES "Eyebrows_style"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Eyes" ADD CONSTRAINT "Eyes_style_id_fkey" FOREIGN KEY ("style_id") REFERENCES "Eyes_style"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Mouth" ADD CONSTRAINT "Mouth_style_id_fkey" FOREIGN KEY ("style_id") REFERENCES "Mouth_style"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
