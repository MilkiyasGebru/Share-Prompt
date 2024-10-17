import ConnectToDatabase from "@/utils/database";
import Prompt from "@/models/prompt"

export const GET = async(req,{params})=>{

    try{
        await ConnectToDatabase();
        const prompt = await Prompt.findById(params.id)
        if (!prompt){
            return new Response("Prompt not found",{status:404})
        }
        return new Response(JSON.stringify(prompt), {status:200})
    }
    catch(error){
        return new Response("Internal Server Error", {status:500})
    }

}

export const PATCH = async(req,{params})=>{
    const {prompt, tag} = await req.json()

    try {
        await ConnectToDatabase()
        const existingPrompt = await Prompt.findById(params.id).populate('creator')
        if (!existingPrompt){
            return new Response("Prompt Not Found",{status:404})
        }
        existingPrompt.prompt = prompt
        existingPrompt.tag = tag

        await existingPrompt.save()

        return new Response(JSON.stringify(existingPrompt), {status:200})
    }
    catch (error) {
        return new Response("Internal Server Error : Failed to Update the Prompt", {status:500})
    }

}


export const DELETE = async(req,{params}) =>{
    try{
        await ConnectToDatabase()
        await Prompt.findByIdAndDelete(params.id)

        return new Response("Prompt Deleted", {status:200})
    }
    catch (err) {
        return new Response("Internal Server Error When Trying to Delete Prompt", {status:500})
    }
}
