import mongoose from "mongoose";


    try {
        mongoose.connect(process.env.MONGO_URL!);
        console.log("MongoDB connection established");
    } catch (error) {
        console.error("Failed to connect to MongoDB:", error);
    }

export default mongoose;