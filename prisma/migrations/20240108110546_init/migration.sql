-- DropForeignKey
ALTER TABLE "hair" DROP CONSTRAINT "hair_id_fkey";

-- AddForeignKey
ALTER TABLE "body" ADD CONSTRAINT "body_hair_id_fkey" FOREIGN KEY ("hair_id") REFERENCES "hair"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
