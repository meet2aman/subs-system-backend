import { config } from "dotenv";

config({ path: `.env.${process.env.NODE_ENV || "development"}.local` });

export const {
  ARCJET_KEY,
  JWT_SECRET,
  JWT_EXPIRES_IN,
  MONGODB_URI,
  PORT,
  NODE_ENV,
  ARCJET_ENV,
} = process.env;
