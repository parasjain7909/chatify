import express from "express";
const router = express.Router();
router.get("/login",(req,res)=>{
    res.send("login successfully")

})
router.get("/creted",(req,res)=>{
    res.send("created successfully")

})
router.get("/logout",(req,res)=>{
    res.send("logout successfully")

})
export default router;