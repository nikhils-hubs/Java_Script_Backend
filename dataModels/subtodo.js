import mongoose from "mongoose";
const SubTodoSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true,
    },
    compeleteMark: {
        type: Boolean,
        default: false,
    },
    createdby: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
}, { timestamps: true });
export const subtodo = mongoose.model("subtodo", SubTodoSchema)