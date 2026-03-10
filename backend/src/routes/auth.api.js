import express from "express";
import {signup} from "../controller/content.js";
const router = express.Router();
router.get("/login",(req,res)=>{
    res.send("login successfully");
})
router.post("/signup",signup)


router.get("/logout",(req,res)=>{
    res.send("logout successfully")

})
export default router;