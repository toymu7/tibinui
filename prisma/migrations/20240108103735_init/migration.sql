-- DropForeignKey
ALTER TABLE "hair" DROP CONSTRAINT "hair_style_id_fkey";

-- AddForeignKey
ALTER TABLE "hair_style" ADD CONSTRAINT "hair_style_id_fkey" FOREIGN KEY ("id") REFERENCES "hair"("style_id") ON DELETE RESTRICT ON UPDATE CASCADE;
