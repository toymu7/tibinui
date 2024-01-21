-- DropForeignKey
ALTER TABLE "body" DROP CONSTRAINT "body_hair_id_fkey";

-- DropForeignKey
ALTER TABLE "hair_style" DROP CONSTRAINT "hair_style_id_fkey";

-- AddForeignKey
ALTER TABLE "hair" ADD CONSTRAINT "hair_style_id_fkey" FOREIGN KEY ("style_id") REFERENCES "hair_style"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "hair" ADD CONSTRAINT "hair_id_fkey" FOREIGN KEY ("id") REFERENCES "body"("hair_id") ON DELETE RESTRICT ON UPDATE CASCADE;
