import express from "express";
import { Express } from "express";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import { connectDB } from "./db/conection";
const app = express();
import authRoute from "./routes/auth";
import hotelRoute from "./routes/hotel";
import userRoute from "./routes/user";
import RoomRoute from "./routes/room";
import cors from 'cors'
import dotenv from "dotenv";
dotenv.config();
app.use(cors())
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.json())
const port = 3005;

app.use(express.json());

app.get("/api", (_req, res) => {
  console.log("someone pinged here now");
  res.send("Hola");
});

// middlewares

app.use("/api/auth", authRoute);
app.use("/api/hotels", hotelRoute);
app.use("/api/users", userRoute);
app.use("/api/rooms", RoomRoute);

app.listen(port, () => {
  console.log("server running on port ", port);
});

connectDB();
