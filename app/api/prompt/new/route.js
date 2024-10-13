import {ConnectToDatabase} from "../../../../utils/database"


export const POST = async(req,res) => {
    const {userId,prompt,tag} = await req.json()
    try {
        await ConnectToDatabase()
    }catch(err){
        console.log(err)
    }
}