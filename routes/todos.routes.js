import { Router } from "express";

//import the model you want to handle 
import Todo from "../models/Todo.model.js";

const todoRouter = Router()

todoRouter.get("/", async (req, res) => {
    try{
        const todos = await Todo.find({})
        res.status(200).json(todos)
    }catch(e){
        res.status(500).json({message: "Server Error"})
    }
})

todoRouter.post("/", async (req, res) => {
    const payLoad = req.body
    try{
        const newTodo = await Todo.create(payLoad)
        res.status(200).json(newTodo)
    }catch(e){
        res.status(500).json({message: "Server Error"})
    }
})

todoRouter.put("/:id", async (req, res) => {
    const payLoad = req.body
    const {id} = req.params
    try{
        const updatedTodo = await Todo.findOneAndUpdate({_id:id}, payLoad, {new: true})
        res.status(200).json(updatedTodo)
    }catch(e){
        res.status(500).json({message: "Server Error"})
    }
})

todoRouter.delete("/:id", async (req, res) => {
    const {id} = req.params
    try{
        await Todo.findOneAndDelete({_id:id})
        res.status(204).json()
    }catch(e){
        res.status(500).json({message: "Server Error"})
    }
})

export default todoRouter