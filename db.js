import mongoose, { Mongoose } from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const MONGO_URI = process.env.MONGO_URI || "mongodb+srv://Jacobo:j4c0b0pu3nt3@cluster0.jpdsxqp.mongodb.net/novenoa"

export  const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("MongoDB connected succesfully");
  } catch (error) {
    console.error("MongoDB connection failed");
  }
};
