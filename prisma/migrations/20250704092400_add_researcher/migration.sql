-- CreateTable
CREATE TABLE "Researcher" (
    "id" SERIAL NOT NULL,
    "fullName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "institution" TEXT,
    "country" TEXT,
    "typeOfResearch" TEXT,
    "targetDiseases" TEXT,
    "interestedInCollab" TEXT,
    "needsAutomation" TEXT,
    "automationPreferences" TEXT,
    "pricingInterest" TEXT,
    "notes" TEXT,
    "submittedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Researcher_pkey" PRIMARY KEY ("id")
);
