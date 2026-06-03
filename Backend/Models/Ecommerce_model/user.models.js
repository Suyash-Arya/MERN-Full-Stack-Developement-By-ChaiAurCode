import mongoose from "mongoose";

const UserSchema = new mongoose.schema(
  {
    Username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
  },
  { timestamps: true },
);

export const User = mongoose.model("User:", UserSchema);
