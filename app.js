import express from "express"
import connectToDB from "./config/db.config.js"
import Todo from "./models/Todo.model.js"
import cors from "cors"

connectToDB()

const PORT = 3003

const app = express()

app.use(express.json())
app.use(cors())

app.get("/", (req, res)=> {
    res.send("Todo Api")
})

app.get("/todos", async (req, res) => {
    try{
        const todos = await Todo.find({})
        res.status(200).json(todos)
    }catch(e){
        res.status(500).json({message: "Server Error"})
    }
})

app.post("/todos", async (req, res) => {
    const payLoad = req.body
    try{
        const newTodo = await Todo.create(payLoad)
        res.status(200).json(newTodo)
    }catch(e){
        res.status(500).json({message: "Server Error"})
    }
})

app.put("/todos/:id", async (req, res) => {
    const payLoad = req.body
    const {id} = req.params
    try{
        const updatedTodo = await Todo.findOneAndUpdate({_id:id}, payLoad, {new: true})
        res.status(200).json(updatedTodo)
    }catch(e){
        res.status(500).json({message: "Server Error"})
    }
})

app.delete("/todos/:id", async (req, res) => {
    const {id} = req.params
    try{
        await Todo.findOneAndDelete({_id:id})
        res.status(204).json()
    }catch(e){
        res.status(500).json({message: "Server Error"})
    }
})

app.listen(PORT, ()=> {
    console.log("Listening on PORT ",PORT)
})

