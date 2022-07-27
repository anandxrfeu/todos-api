import {Router} from "express";
import bcrypt from "bcryptjs"
import User from "../models/User.model.js";

const authRouter = Router()

authRouter.post("/signup", async (req, res) => {
    const {name, email, password} = req.body
    console.group(name, email, password)
    try{
        const user = await User.findOne({name})
        if(user){
            throw new Error ("User already exists!")
        }
        const salt = bcrypt.genSaltSync(+process.env.SALT_ROUNDS)
        const passwordHash = bcrypt.hashSync(password, salt)

        const newUser = await User.create({name, email, password: passwordHash})
        res.status(201).json(newUser)
    }catch(e){
        if(e.message === "User already exists!"){
            res.status(409).json({message: e.message})
        }
        res.status(500).json({message: "server error"})
    }
    
})

export default authRouter