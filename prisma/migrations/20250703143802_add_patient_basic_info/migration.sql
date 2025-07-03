-- CreateTable
CREATE TABLE "Patient" (
    "id" SERIAL NOT NULL,
    "fullName" TEXT NOT NULL,
    "dateOfBirth" TIMESTAMP(3) NOT NULL,
    "email" TEXT,
    "phone" TEXT,
    "ageGroup" TEXT,
    "genderIdentity" TEXT,
    "treatments" TEXT,
    "consequences" TEXT,
    "socioeconomicStatus" TEXT,
    "religion" TEXT,
    "ethnicity" TEXT,
    "nationality" TEXT,
    "relationshipStatus" TEXT,
    "submittedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Patient_pkey" PRIMARY KEY ("id")
);
