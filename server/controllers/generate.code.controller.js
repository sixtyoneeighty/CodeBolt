import Openai from "openai";
import dotenv from "dotenv";
dotenv.config();

const openai=new Openai({
   apiKey:process.env.GOOGLE_API,
   baseURL:process.env.BASE_URL
});

export const backendCodeGenerator=async(req,res)=>{
   res.send("This is a backend Code Generator");
}


export const frontendCodeGenerator=async(req,res)=>{
   res.send("This is a frontend Code Generator");
}
