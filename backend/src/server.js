import  express from "express";// module mwi import kaam karega aur commonjs mai require
import dotenv from "dotenv";
import authRouter from "./routes/auth.api.js";
//import message from  "./routes/message.route.js";
import {connectdb} from "./lib/db.js";
import messagerouter from "./routes/message.api.js"
import cookieparser from "cookie-parser";
dotenv.config();

const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.json());
app.use(cookieparser());
app.use("/api/auth", authRouter)
app.use("/api/message",messagerouter);

app.get("/",(req,res)=>{
  res.send("hello world");
});
app.listen(PORT,()=>{
  console.log("server started");
  connectdb();

});