import  express from "express";
import dotenv from "dotenv";
import apiroute from "./routes/auth.api.js";
dotenv.config();
const app= express();
const port= process.env.port;
app.use("/api",apiroute);
app.listen(port,()=>{
    console.log("start");
})