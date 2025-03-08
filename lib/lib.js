import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { JWT_EXPIRES_IN, JWT_SECRET } from "../config/env.js";
export const generateHash = async (salt, value) => {
  const Salt = await bcrypt.genSalt(salt);
  console.log(Salt);
  const generatedHash = await bcrypt.hash(value, Salt);
  return generatedHash;
};

export const generateToken = async (userId) => {
  return jwt.sign({ userId }, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
};

export const compareHash = async (password, hashedPassword) => {
  return await bcrypt.compare(password, hashedPassword);
};
