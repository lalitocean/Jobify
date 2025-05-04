import cookieParser from "cookie-parser";
import express from "express";
import cors from "cors";
import connectDB from "./utils/db.js";
import userRoute from "./routes/user.route.js";
import companyRoute from "./routes/company.route.js";
import jobRoute from "./routes/job.route.js";
import applicationRoute from "./routes/application.route.js";

import dotenv from "dotenv";
// load-env.js
const env = process.env.NODE_ENV || 'development';
require('dotenv').config({ path: `.env.${env}` });

const app = express();
// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const allowedOrigins = [
  "https://hi-jobify.vercel.app",
  "http://localhost:5173", // Add your local development URL if needed
];

const corsOptions = {
  origin: (origin, callback) => {
    if (allowedOrigins.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
};

app.use(cors(corsOptions));

let PORT = process.env.PORT || 3000;

// Api
// userApis
app.use("/api/user", userRoute);

// company apis

app.use("/api/company", companyRoute);

// job api

app.use("/api/job", jobRoute);

// application api

app.use("/api/application", applicationRoute);

app.listen(PORT, () => {
  connectDB();
  console.log(`Server is running at ${PORT}`);
});
