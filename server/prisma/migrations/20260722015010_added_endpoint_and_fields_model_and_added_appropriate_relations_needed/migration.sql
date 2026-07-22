-- CreateEnum
CREATE TYPE "EndpointMethod" AS ENUM ('GET', 'POST', 'PATCH', 'PUT', 'DELETE');

-- CreateEnum
CREATE TYPE "FieldDataType" AS ENUM ('string', 'number', 'boolean', 'object', 'array');

-- CreateTable
CREATE TABLE "endpoints" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "method" "EndpointMethod" NOT NULL,
    "route" TEXT NOT NULL,
    "projectId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "responseSchemaId" TEXT NOT NULL,

    CONSTRAINT "endpoints_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "fields" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "datatype" "FieldDataType" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "responseSchemaId" TEXT NOT NULL,

    CONSTRAINT "fields_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "responseSchemas" (
    "id" TEXT NOT NULL,
    "systemPrompt" TEXT,
    "instruction" TEXT,

    CONSTRAINT "responseSchemas_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "endpoints_responseSchemaId_key" ON "endpoints"("responseSchemaId");

-- AddForeignKey
ALTER TABLE "endpoints" ADD CONSTRAINT "endpoints_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "projects"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "endpoints" ADD CONSTRAINT "endpoints_responseSchemaId_fkey" FOREIGN KEY ("responseSchemaId") REFERENCES "responseSchemas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "fields" ADD CONSTRAINT "fields_responseSchemaId_fkey" FOREIGN KEY ("responseSchemaId") REFERENCES "responseSchemas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
