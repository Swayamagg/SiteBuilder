import express from "express";
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./config/db.js";
import authRoute from "./routes/auth.routes.js";
import cookieParser from "cookie-parser";
import cors from "cors";
const app=express();
const port=process.env.PORT||5000;
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))
app.use("/api/auth",authRoute);

app.listen(port,()=>{
    console.log("server");
    connectDB()
});