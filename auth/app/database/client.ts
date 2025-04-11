import mongoose from "mongoose";

const client = (async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL!);
        console.log("MongoDB connection established");
    } catch (error) {
        console.error("Failed to connect to MongoDB:", error);
    }
})();

export default client;