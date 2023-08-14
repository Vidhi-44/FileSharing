import mongoose from "mongoose";

const DBconnection = async()=>{
    const DB_URL ="mongodb://127.0.0.1:27017/FileSharing"
    try{
        await mongoose.connect(DB_URL, {useNewUrlParser: true});
        console.log("Databse connected successfully")

    }catch(error){
        console.error("Error while connecting database", error.message);
    }
}

export default DBconnection;