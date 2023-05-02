import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import cors from 'cors';
import authRoutes from './routes/authRoutes.js';
import morgan from 'morgan'

dotenv.config()
connectDB()

const app = express()
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

app.use('/api/v1/auth', authRoutes);

app.get('/', (req, res) => {
    res.send({
        message: "hello adi boii"
    });
})

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`server running on ${PORT}`)
})