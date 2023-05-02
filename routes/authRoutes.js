import express from "express";
import { loginController } from '../controllers/authController.js';

// Router object

const router = express.Router();

router.post('/login', loginController)

export default router