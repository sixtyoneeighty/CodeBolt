import express from "express";
import { backendCodeGenerator,frontendCodeGenerator } from "../controllers/generate.code.controller.js";
import dotenv from "dotenv";
dotenv.config();

const router=express.Router();

router.post("/generate-backend-code",backendCodeGenerator);
router.post("/generate-frontend-code",frontendCodeGenerator);

export default router;