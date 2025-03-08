import { config } from "dotenv";

config({ path: `.env.${process.env.NODE_ENV || "development"}.local` });

export const { JWT_SECRET, JWT_EXPIRES_IN, MONGODB_URI, PORT, NODE_ENV } =
  process.env;
