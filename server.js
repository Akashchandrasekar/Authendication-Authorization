import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './Database/dbConfig.js';
import authRoutes from './routes/authRoutes.js';

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB
connectDB();

app.get("/", (req, res) => {
    res.status(200).send("Welcome To Our Api");
  });

// Routes
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
