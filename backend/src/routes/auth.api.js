import express from "express";
import {signup,login,logout,update} from "../controller/content.js";
import {protectroute} from "../middleware/auth.middleware.js"
const router = express.Router();
import { arcjetMiddleware } from "../middleware/arcjet.middleware.js";
router.get("/test",arcjetMiddleware,(req,res)=>{
    res.send(200).json({message:"testing is on"});
});
router.post("/signup",signup)

router.post("/login",arcjetMiddleware,login);
router.post("/logout",logout);
router.put("/update-profile",protectroute,update)
router.get("/checkuser",protectroute,(req,res)=>res.status(200).json(req.user))

export default router;