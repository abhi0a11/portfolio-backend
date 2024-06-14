import express from "express";
import { connectDB } from "./data/database.js";
import { fetchData } from "./controller/user.js";
import { config } from "dotenv";
import cors from "cors";

const app = express();

config({
  path: "./data/config.env",
});

//database
connectDB;

//middlewares
app.use(express.json());
app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["POST"],
    credentials: true,
  })
);

app.post("/form", fetchData);

app.listen(process.env.PORT);
