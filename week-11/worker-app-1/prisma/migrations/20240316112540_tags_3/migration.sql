/*
  Warnings:

  - Made the column `blogId` on table `Tag` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Tag" DROP CONSTRAINT "Tag_blogId_fkey";

-- AlterTable
ALTER TABLE "Tag" ALTER COLUMN "blogId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "Tag" ADD CONSTRAINT "Tag_blogId_fkey" FOREIGN KEY ("blogId") REFERENCES "Blog"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
