import  express from "express";
import dotenv from "dotenv";
import path from "path";
import cors from "cors";
import apiroute from "./routes/auth.api.js";
dotenv.config();
const app= express();
const port= process.env.PORT||5000;
const __dirname=path.resolve();



app.get("/",(req,res)=>{
    res.send("this time it has to be worked");
})

app.use("/api",apiroute);
app.use(cors({
    origin:"https://chatify-wine-eight.vercel.app",
    credentials:true
}))


// // make ready for the production 
// if(process.env.NODE_ENV==="production"){
//     app.use(express.static(path.join(__dirname,"../frontend/dist")))

//     app.get("*",(req,res)=>{
//         res.sendFile(path.join(__dirname,"../frontend/dist/index.html"))
//     })
// }



app.listen(port,()=>{
    console.log("start");
})