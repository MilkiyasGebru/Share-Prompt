import ConnectToDatabase from "../../../../utils/database"
import Prompt from "../../../../models/prompt"


export const POST = async(req,res) => {
    const {userId,prompt,tag} = await req.json()
    try {
        console.log(userId,prompt,tag)
        await ConnectToDatabase()
        const newPrompt = new Prompt({creator:userId, tag, prompt})
        await newPrompt.save()
        return new Response(JSON.stringify(newPrompt), {status:201})
    }catch(err){

        console.log(err)
        return new Response("Falied to Create a New Prompt", {status:500})
    }
}