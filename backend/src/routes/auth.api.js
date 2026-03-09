import express from "express";
import {login} from "../controller/content.js";
const router = express.Router();
router.get("/login",login)
router.get("/creted",(req,res)=>{
    res.send("created successfully")

})
router.get("/logout",(req,res)=>{
    res.send("logout successfully")

})
export default router;