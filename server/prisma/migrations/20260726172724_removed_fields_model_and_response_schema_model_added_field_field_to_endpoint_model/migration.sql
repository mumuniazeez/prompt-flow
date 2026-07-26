/*
  Warnings:

  - You are about to drop the `fields` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `responseSchemas` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "endpoints" DROP CONSTRAINT "endpoints_responseSchemaId_fkey";

-- DropForeignKey
ALTER TABLE "fields" DROP CONSTRAINT "fields_responseSchemaId_fkey";

-- AlterTable
ALTER TABLE "endpoints" ADD COLUMN     "responseFields" JSONB NOT NULL DEFAULT '[]';

-- DropTable
DROP TABLE "fields";

-- DropTable
DROP TABLE "responseSchemas";
