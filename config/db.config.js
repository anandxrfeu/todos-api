import mongoose from "mongoose";
import dotenv from 'dotenv/config'

const DATABASE_URI = process.env.MONGO_URI
const DATABSE_NAME = process.env.MONGO_DATABASE

const connectToDB = async () => {
    const connection = await mongoose.connect(`${DATABASE_URI}/${DATABSE_NAME}`)
    console.log("Connected to DB: ",DATABSE_NAME)
}

export default connectToDB