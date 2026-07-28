/*
  Warnings:

  - The values [PATCH,PUT,DELETE] on the enum `EndpointMethod` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "EndpointMethod_new" AS ENUM ('GET', 'POST');
ALTER TABLE "endpoints" ALTER COLUMN "method" TYPE "EndpointMethod_new" USING ("method"::text::"EndpointMethod_new");
ALTER TYPE "EndpointMethod" RENAME TO "EndpointMethod_old";
ALTER TYPE "EndpointMethod_new" RENAME TO "EndpointMethod";
DROP TYPE "public"."EndpointMethod_old";
COMMIT;
