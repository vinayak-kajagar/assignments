/*
  Warnings:

  - You are about to drop the column `tags` on the `Tag` table. All the data in the column will be lost.
  - Added the required column `tag` to the `Tag` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Tag" DROP CONSTRAINT "Tag_blogId_fkey";

-- AlterTable
ALTER TABLE "Tag" DROP COLUMN "tags",
ADD COLUMN     "tag" TEXT NOT NULL,
ALTER COLUMN "blogId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Tag" ADD CONSTRAINT "Tag_blogId_fkey" FOREIGN KEY ("blogId") REFERENCES "Blog"("id") ON DELETE SET NULL ON UPDATE CASCADE;
