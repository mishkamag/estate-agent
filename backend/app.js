import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRoute from "./routes/auth.route.js";

const app = express();

app.use(cors({ origin: process.env.FRONTEND_URL, credentials: true })); //send cookie  need credentials
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoute);

app.listen(8000, () => {
  console.log("hi ssss");
});
