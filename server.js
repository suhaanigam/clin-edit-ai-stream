import express from 'express';
import { PrismaClient } from '@prisma/client';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config(); // ✅ Load .env variables

const prisma = new PrismaClient();
const app = express();
const PORT = 4000;

// ✅ CORS must be enabled BEFORE defining routes
app.use(cors({
  origin: 'http://localhost:8080', // Your frontend dev URL
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type'],
}));

// ✅ Body parser middleware
app.use(express.json());

app.post('/api/patient', async (req, res) => {
  try {
    const {
      fullName,
      dateOfBirth,
      email,
      phone,
      ageGroup,
      genderIdentity,
      selfDescribedGender,
      treatments,
      consequences,
      socioeconomicStatus,
      religion,
      ethnicity,
      nationality,
      relationshipStatus,
    } = req.body;

    const newPatient = await prisma.patient.create({
      data: {
        fullName,
        dateOfBirth: new Date(dateOfBirth),
        email,
        phone,
        ageGroup,
        genderIdentity,
        selfDescribedGender,
        treatments,
        consequences,
        socioeconomicStatus,
        religion,
        ethnicity,
        nationality,
        relationshipStatus,
      },
    });

    res.status(201).json(newPatient);
  } catch (error) {
    console.error("Error saving patient:", error);
    res.status(500).json({ error: 'Failed to save patient data' });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
