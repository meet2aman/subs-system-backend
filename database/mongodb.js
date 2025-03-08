import mongoose from "mongoose";
import { MONGODB_URI, NODE_ENV } from "../config/env.js";

if (!MONGODB_URI) {
  throw new Error(
    `Please Define the MONGODB_URI Environment variable inside .env.<development/production>.local`
  );
}

const connectToDatabase = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log(`Connected to database in ${NODE_ENV} mode`)
  } catch (error) {
    console.log(`Error While Connecting the Database ${error}`);
    process.exit(1);
  }
};

export default connectToDatabase;
