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
               content:`You are a professional prompt engineer specializing in crafting precise, effective prompts.
            Your task is to enhance prompts by making them more specific, actionable, and effective.

            I want you to improve the user prompt that is wrapped in \`<original_prompt>\` tags.

            For valid prompts:
            - Make instructions explicit and unambiguous
            - Add relevant context and constraints
            - Remove redundant information
            - Maintain the core intent
            - Ensure the prompt is self-contained
            - Use professional language

            For invalid or unclear prompts:
            - Respond with clear, professional guidance
            - Keep responses concise and actionable
            - Maintain a helpful, constructive tone
            - Focus on what the user should provide
            - Use a standard template for consistency

            IMPORTANT: Your response must ONLY contain the enhanced prompt text.
            Do not include any explanations, metadata, or wrapper tags.`,
            },
            {
               role:"user",
               content:`<original_prompt>
              ${prompt}
            </original_prompt>`
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