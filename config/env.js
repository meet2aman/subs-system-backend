import { config } from "dotenv";

config({ path: `.env.${process.env.NODE_ENV || "development"}.local` });

export const {
  SERVER_URL,
  ARCJET_KEY,
  JWT_SECRET,
  JWT_EXPIRES_IN,
  MONGODB_URI,
  PORT,
  NODE_ENV,
  ARCJET_ENV,
  UPSTASH_URL,
  UPSTASH_TOKEN,
  QSTASH_CURRENT_SIGNING_KEY,
  QSTASH_NEXT_SIGNING_KEY,
  EMAIL_PASSWORD,
} = process.env;
