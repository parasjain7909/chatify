import  express from "express";// module mwi import kaam karega aur commonjs mai require
import dotenv from "dotenv";
import authRouter from "./routes/auth.api.js";
//import message from  "./routes/message.route.js";
import {connectdb} from "./lib/db.js";
dotenv.config();

const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.json());
app.use("/api/auth", authRouter)

app.get("/",(req,res)=>{
  res.send("hello world");
});
app.listen(PORT,()=>{
  console.log("server started");
  connectdb();

});