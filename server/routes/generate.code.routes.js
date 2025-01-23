import express from "express";
import { backendCodeGenerator,frontendCodeGenerator,promptEnchancer } from "../controllers/generate.code.controller.js";
import dotenv from "dotenv";
dotenv.config();

const router=express.Router();

router.post("/generate-backend-code",backendCodeGenerator);
router.post("/generate-frontend-code",frontendCodeGenerator);
router.post("/generate-prompt",promptEnchancer)
export default router;