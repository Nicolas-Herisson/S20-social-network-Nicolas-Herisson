import mongoose from "mongoose";

const mongoURL = process.env.MONGO_URL!;

mongoose.connect(mongoURL)

export default mongoose;
