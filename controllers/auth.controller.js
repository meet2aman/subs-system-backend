import mongoose from "mongoose";
import User from "../models/user.model.js";
import { compareHash, generateHash, generateToken } from "../lib/lib.js";

export const signUp = async (req, res, next) => {
  const session = await mongoose.startSession();
  session.startTransaction();
  try {
    const { name, email, password } = await req.body;

    // checking is user exist in database
    const isUserExist = await User.findOne({
      email,
    });

    // if user does't exist in database
    if (isUserExist) {
      const error = new Error("User already Exist");
      error.statusCode = 409;
      throw error;
    }

    // hash the password
    const hashedPassword = await generateHash(10, password);

    // creating a new user
    const newUser = await User.create(
      [{ name, email, password: hashedPassword }],
      { session }
    );

    // signing the token
    const token = await generateToken(newUser[0]._id);
    await session.commitTransaction();
    session.endSession();
    res.status(201).json({
      success: true,
      message: "User Created Successfully",
      data: {
        token,
        user: newUser[0],
      },
    });
  } catch (error) {
    await session.abortTransaction();
    session.endSession();
    next(error);
  }
};

export const signIn = async (req, res, next) => {
  try {
    const { email, password } = await req.body;

    // check user id db
    const user = await User.findOne({ email });

    if (!user) {
      const error = new Error("User not found");
      throw error;
    }
    const isValidPassword = await compareHash(password, user.password);
    if (!isValidPassword) {
      const error = new Error("Password is incorrect");
      error.statusCode = 401;
      throw error;
    }

    const token = await generateToken(user._id);

    res.status(200).json({
      success: true,
      message: "Signed In Successfully",
      data: {
        token,
        user,
      },
    });
  } catch (error) {
    next(error);
  }
};

export const signOut = async (req, res, next) => {};
