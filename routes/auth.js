import express from "express";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const router = express.Router();
const prisma = new PrismaClient();

function isValidEmail(email) {
  return /^\S+@\S+\.\S+$/.test(email);
}

function isValidPhone(phone) {
  return /^\+?[0-9]{7,15}$/.test(phone);
}


// Register
router.post("/register", async (req, res) => {
  const { username, email, phone, password } = req.body;

  if (!username || !password || (!email && !phone)) {
    return res.status(400).json({ error: "Username, password, and email or phone required." });
  }

  if (email && !isValidEmail(email)) {
    return res.status(400).json({ error: "Invalid email format." });
  }

  if (phone && !isValidPhone(phone)) {
    return res.status(400).json({ error: "Invalid phone number format." });
  }

  const existingUser = await prisma.user.findFirst({
    where: {
      OR: [{ email }, { phone }, { username }]
    }
  });

  if (existingUser) {
    return res.status(400).json({ error: "Email, phone, or username already exists." });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await prisma.user.create({
    data: {
      username,
      email,
      phone,
      password: hashedPassword,
    }
  });

  res.json({ message: "Registration successful", user: { id: user.id, username: user.username } });
});

// Sign In
router.post("/login", async (req, res) => {
  const { identifier, password } = req.body;

  const user = await prisma.user.findFirst({
    where: {
      OR: [{ email: identifier }, { phone: identifier }]
    }
  });

  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).json({ error: "Invalid credentials." });
  }

  res.json({ message: "Login successful", user: { id: user.id, username: user.username } });
});

export default router;
