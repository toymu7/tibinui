-- DropForeignKey
ALTER TABLE "eyebrows" DROP CONSTRAINT "eyebrows_id_fkey";

-- DropForeignKey
ALTER TABLE "eyebrows_style" DROP CONSTRAINT "eyebrows_style_id_fkey";

-- DropForeignKey
ALTER TABLE "eyes" DROP CONSTRAINT "eyes_id_fkey";

-- DropForeignKey
ALTER TABLE "eyes_style" DROP CONSTRAINT "eyes_style_id_fkey";

-- DropForeignKey
ALTER TABLE "hair_style" DROP CONSTRAINT "hair_style_id_fkey";

-- DropForeignKey
ALTER TABLE "mouth" DROP CONSTRAINT "mouth_id_fkey";

-- DropForeignKey
ALTER TABLE "mouth_style" DROP CONSTRAINT "mouth_style_id_fkey";

-- AddForeignKey
ALTER TABLE "hair" ADD CONSTRAINT "hair_style_id_fkey" FOREIGN KEY ("style_id") REFERENCES "hair_style"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "eyebrows" ADD CONSTRAINT "eyebrows_style_id_fkey" FOREIGN KEY ("style_id") REFERENCES "eyebrows_style"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "eyebrows" ADD CONSTRAINT "eyebrows_id_fkey" FOREIGN KEY ("id") REFERENCES "body"("eyebrows_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "eyes" ADD CONSTRAINT "eyes_style_id_fkey" FOREIGN KEY ("style_id") REFERENCES "eyes_style"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "eyes" ADD CONSTRAINT "eyes_id_fkey" FOREIGN KEY ("id") REFERENCES "body"("eyes_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "mouth" ADD CONSTRAINT "mouth_style_id_fkey" FOREIGN KEY ("style_id") REFERENCES "mouth_style"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "mouth" ADD CONSTRAINT "mouth_id_fkey" FOREIGN KEY ("id") REFERENCES "body"("mouth_id") ON DELETE RESTRICT ON UPDATE CASCADE;
