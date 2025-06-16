-- CreateTable
CREATE TABLE "Todo" (
    "id" TEXT NOT NULL,
    "desciprtion" TEXT NOT NULL,
    "completed" BOOLEAN NOT NULL DEFAULT false,
    "cretedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Todo_pkey" PRIMARY KEY ("id")
);
