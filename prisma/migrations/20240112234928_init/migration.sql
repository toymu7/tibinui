-- DropForeignKey
ALTER TABLE "Eyebrows" DROP CONSTRAINT "Eyebrows_style_id_fkey";

-- DropForeignKey
ALTER TABLE "Eyes" DROP CONSTRAINT "Eyes_style_id_fkey";

-- DropForeignKey
ALTER TABLE "Hair" DROP CONSTRAINT "Hair_style_id_fkey";

-- DropForeignKey
ALTER TABLE "Mouth" DROP CONSTRAINT "Mouth_style_id_fkey";

-- AddForeignKey
ALTER TABLE "Hair_style" ADD CONSTRAINT "Hair_style_id_fkey" FOREIGN KEY ("id") REFERENCES "Hair"("style_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Eyebrows_style" ADD CONSTRAINT "Eyebrows_style_id_fkey" FOREIGN KEY ("id") REFERENCES "Eyebrows"("style_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Eyes_style" ADD CONSTRAINT "Eyes_style_id_fkey" FOREIGN KEY ("id") REFERENCES "Eyes"("style_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Mouth_style" ADD CONSTRAINT "Mouth_style_id_fkey" FOREIGN KEY ("id") REFERENCES "Mouth"("style_id") ON DELETE RESTRICT ON UPDATE CASCADE;
