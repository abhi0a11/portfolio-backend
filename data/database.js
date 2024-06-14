import mongoose from "mongoose";
import { config } from "dotenv";
config({
  path: "./data/config.env",
});

export const connectDB = mongoose
  .connect(process.env.MONGO_URI, {
    dbName: "portfolio",
  })
  .then((c) => console.log(`db started with ${c.connection.host}`))
  .catch((e) => console.log(e));
