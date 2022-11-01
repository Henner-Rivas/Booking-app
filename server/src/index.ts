import express from "express";
import { connectDB } from "./db/conection";
const app = express();
import authRoute from "./routes/auth";
import hotelsRoute from "./routes/hotels";

import dotenv from "dotenv";
dotenv.config();

const port = 3001;

app.use(express.json());

app.get("/api", (_req, res) => {
  console.log("someon pinged here now");
  res.send("HOla");
});

// middlewares

app.use("/api/auth", authRoute);
app.use("/api/hotels", hotelsRoute);

app.listen(port, () => {
  console.log("server running on port ", port);
});

connectDB();
