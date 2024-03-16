-- DropForeignKey
ALTER TABLE "Tag" DROP CONSTRAINT "Tag_blogId_fkey";

-- AddForeignKey
ALTER TABLE "Tag" ADD CONSTRAINT "Tag_blogId_fkey" FOREIGN KEY ("blogId") REFERENCES "Blog"("id") ON DELETE CASCADE ON UPDATE CASCADE;
