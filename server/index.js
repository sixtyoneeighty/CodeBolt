import express from "express";
import dotenv from "dotenv";
import generateCode from "./routes/generate.code.routes.js"
dotenv.config();
const app=express();
const port=process.env.PORT || 3000;

app.use(express.json());
app.use("/api/v1",generateCode);

app.listen(port,()=>{
   console.log(`Server is running on port ${port}`);
})