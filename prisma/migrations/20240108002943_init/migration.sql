/*
  Warnings:

  - You are about to drop the column `part_id` on the `eyebrows_part_style` table. All the data in the column will be lost.
  - You are about to drop the column `part_id` on the `eyes_part_style` table. All the data in the column will be lost.
  - You are about to drop the column `part_id` on the `hair_part_style` table. All the data in the column will be lost.
  - You are about to drop the column `part_id` on the `mouth_part_style` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "eyebrows_part_style" DROP COLUMN "part_id";

-- AlterTable
ALTER TABLE "eyes_part_style" DROP COLUMN "part_id";

-- AlterTable
ALTER TABLE "hair_part_style" DROP COLUMN "part_id";

-- AlterTable
ALTER TABLE "mouth_part_style" DROP COLUMN "part_id";
