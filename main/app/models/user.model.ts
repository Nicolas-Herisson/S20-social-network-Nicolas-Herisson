import mongoose from "../database/client";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    image: {
        type: String
    },
    role_id: {
        type: Number,
        default: 1
    }
});

const User = mongoose.model("User", userSchema );

export default User;
