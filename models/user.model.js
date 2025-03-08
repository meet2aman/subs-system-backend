import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "User Name is required"],
      trim: true,
      minLength: 2,
      maxLength: 30,
    },

    email: {
      type: String,
      required: [true, "Email is Required"],
      unique: true,
      trim: true,
      minLength: 5,
      lowercase: true,
      maxLength: 40,
      match: [/^\S+@\S+\.\S+$/, "Please fill a valid email address"],
    },
    password: {
      type: String,
      required: [true, "User Password is required"],
      minLength: 6,
      maxLength: 255,
    },
  },
  {
    timestamps: true,
  }
);

const User = model("User", userSchema);

export default User;
