/*
  Warnings:

  - You are about to drop the column `responseSchemaId` on the `endpoints` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "endpoints_responseSchemaId_key";

-- AlterTable
ALTER TABLE "endpoints" DROP COLUMN "responseSchemaId";
