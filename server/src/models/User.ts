import mongoose from "mongoose";
const { Schema } = mongoose;

const UserSchema = new mongoose.Schema(
  {
    usermane: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },

    isAdmin: {
      type: Boolean,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", UserSchema);