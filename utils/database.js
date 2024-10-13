import mongoose from 'mongoose';
let isConnected = false;

export default async function ConnectToDatabase() {
    mongoose.set('strictQuery',true)
    if (isConnected){
        console.log("MongoDB is already connected")
        return;

    }
    try{
        await mongoose.connect(process.env.MONGODB_URI, {dbName:"prompt_api",useNewUrlParser: true, useUnifiedTopology: true});
        isConnected = true;
    }
    catch(err){
        console.log(err," Error connecting database");
    }
}
