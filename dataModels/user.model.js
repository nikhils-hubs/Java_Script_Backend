import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "username required"],
        unique: [true, "username already exists"],
        lowercase: true,
    },
    email: {
        type: String,
        required: [true, "email is required"],
        lowercase: true,
    },
    password: {
        type: String,
        required: [true, "password is required"],
    },
}, { timestamps: true });

export const User = mongoose.model('User', userSchema);