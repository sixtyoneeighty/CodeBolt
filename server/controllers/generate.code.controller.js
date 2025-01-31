import Openai from "openai";
import dotenv from "dotenv";
dotenv.config();

const openai=new Openai({
   apiKey:process.env.GOOGLE_API,
   baseURL:process.env.BASE_URL
});

export const backendCodeGenerator=async(req,res)=>{
   try{
      const {projectDescription}=req.body;
      if(!projectDescription){
         return res.status(400).json({error:"Please provide a project description"});
      }
      
      res.status(200).json({message:"This route is under working"});
   }catch(error){
      console.error("Error occurred in backendCodeGenerator controller:",error);
      res.status(500).json({error:"Internal Server Error"});
   }
}


export const frontendCodeGenerator=async(req,res)=>{
   res.send("This is a frontend Code Generator");
}



export const promptEnchancer=async(req,res)=>{
   try{
      const {prompt}=req.body;
      if(!prompt){
         return res.status(400).json({error:"Please provide a prompt"});
      }
      const response=await openai.chat.completions.create({
         model:process.env.Model,
         messages:[
            {
               role:"system",
               content:"Your are intelligent assistant who help user to enchance their prompt to generate better code",
            },
            {
               role:"user",
               content:prompt,
            }
         ],
         max_tokens:999999,
         temperature:0.1,
         top_p:0.1,
      });
      res.status(200).json({response:response.choices[0].message.content});
   }catch(error){
      console.error("Error occurred in promptEnchancer controller:",error);
      res.status(500).json({error:"Internal Server Error"});
   }
}