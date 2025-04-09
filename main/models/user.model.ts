import mongoose from "../database/client";

const UserSchema = new mongoose.Schema({

    id: {
        type: Number,
        required: true,
        unique: true
    },
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
}, {
    timestamps: true
});

const User = mongoose.model("User", UserSchema );

export default User;
