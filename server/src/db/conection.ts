import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

export async function connectDB() {
  try {
    await mongoose.connect(
      process.env.MONGODB ||
        "mongodb+srv://Henner:Henner@cluster0.nzmndlx.mongodb.net/booking-app?retryWrites=true&w=majority"
    );
    console.log("connected to mongoDB");
  } catch (error) {
    console.log(error);
  }
}
mongoose.connection.on("disconnected", () => {
  console.log("disconnected");
});
mongoose.connection.on("connected", () => {
  console.log("sconnected");
});
