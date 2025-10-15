import mongoose, { Mongoose } from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/novenoa";

export  const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("MongoDB connected succesfully");
  } catch (error) {
    console.error("MongoDB connection failed")
  }
};
