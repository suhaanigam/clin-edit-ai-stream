import express from 'express';
import { PrismaClient } from '@prisma/client';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from "./routes/auth.js"; 


dotenv.config(); 

const prisma = new PrismaClient();
const app = express();
const PORT = 4000;

app.use(cors({
  origin: 'http://localhost:8080', // frontend dev URL
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type'],
}));

app.use(express.json());

app.use("/api/auth", authRoutes);

app.post('/api/patient', async (req, res) => {
  try {
    console.log('📥 Incoming data:', req.body);
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

app.post('/api/researcher', async (req, res) => {
  try {
    const data = req.body;

    const newResearcher = await prisma.researcher.create({
      data,
    });

    res.status(201).json(newResearcher);
  } catch (error) {
    console.error("❌ Error saving researcher data:", error);
    res.status(500).json({ error: 'Failed to save researcher data' });
  }
});


app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
