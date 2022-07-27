import express from "express"
import cors from "cors"
import dotenv from "dotenv/config"
import todoRouter from "./routes/todos.routes.js"

import connectToDB from "./config/db.config.js"

connectToDB()

const PORT = process.env.EXPRESS_PORT || 3003

const app = express()

app.use(express.json())
app.use(cors())

app.use('/todos', todoRouter)

app.listen(PORT, ()=> {
    console.log("Listening on PORT ",PORT)
})

