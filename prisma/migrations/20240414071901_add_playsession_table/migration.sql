-- CreateTable
CREATE TABLE "PlaySession" (
    "id" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "display_name" TEXT NOT NULL,
    "score" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PlaySession_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "PlaySession_code_key" ON "PlaySession"("code");

-- CreateIndex
CREATE INDEX "PlaySession_score_idx" ON "PlaySession"("score");
