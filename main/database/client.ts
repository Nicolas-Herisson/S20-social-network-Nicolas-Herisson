import mongoose from "mongoose";

const mongoURL = process.env.MONGO_URL || "mongodb://localhost:27017/demo";

mongoose.connect(mongoURL, {
    
})

export default mongoose;
