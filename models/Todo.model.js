import mongoose from "mongoose";

const {Schema, model} = mongoose

const TodoSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    },    
    user: {
      type: mongoose.ObjectId,
    }
}, {timestamps: true})

const Todo = model("Todo", TodoSchema)

export default Todo;