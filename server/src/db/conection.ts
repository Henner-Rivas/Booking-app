import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const process = require("process");

export async function connectDB() {
  try {

    await mongoose.connect(process.env.MONGODB 
);
    console.log("connected to mongoDB");
  } catch (error) {

    console.log("Error  conection",error);
  }
}
mongoose.connection.on("disconnected", () => {
  console.log("disconnected");
});
mongoose.connection.on("connected", () => {
  console.log("sconnected");
});
