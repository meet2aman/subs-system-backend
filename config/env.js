import { config } from "dotenv";

config({ path: `.env.${process.env.NODE_ENV || "development"}.local` });

export const { MONGODB_URI, PORT, NODE_ENV } = process.env;
