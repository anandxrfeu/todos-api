import mongoose from "mongoose";

const DATABASE_URI = "mongodb://127.0.0.1:27017"
const DATABSE_NAME = "todoApi"

const connectToDB = async () => {
    const connection = await mongoose.connect(`${DATABASE_URI}/${DATABSE_NAME}`)
    console.log("Connected to DB: ",DATABSE_NAME)
}

export default connectToDB