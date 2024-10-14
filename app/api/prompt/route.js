import ConnectToDatabase from "../../../utils/database";
import Prompt from "../../../models/prompt"

export const GET = async (req,res)=> {
    try{
        const prompts = await Prompt.find({}).populate('creator')
        return new Response(JSON.stringify(prompts), {status:200})
    }
    catch(err){
        return new Response("Failed to fetch the Prompts", {status:500})
    }
}