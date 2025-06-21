import mongoose from "mongoose";
const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    compeleteMark: {
        type: Boolean,
        default: false,
    },
    subTodo: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "subtodo",
        },
    ],
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
}, { timestamps: true });

export const Todo = mongoose.model('Todo', todoSchema);