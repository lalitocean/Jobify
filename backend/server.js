import cookieParser from "cookie-parser";
import express from "express";
import cors from "cors";
import connectDB from "./utils/db.js";
import userRoute from "./routes/user.route.js";

import dotenv from "dotenv";
dotenv.config({});

const app = express();
// Middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

const corsOptions = {
  origin: "http//localhost:5173",
  Credentials: true,
};
app.use(cors(corsOptions));

let PORT = process.env.PORT || 3000;

// Api

app.use("/api/user", userRoute);

app.listen(PORT, () => {
  connectDB();
  console.log(`Server is running at ${PORT}`);
});
