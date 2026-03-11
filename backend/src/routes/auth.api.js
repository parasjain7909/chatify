import express from "express";
import {signup,login,logout,update} from "../controller/content.js";
import {protectroute} from "../middleware/auth.middleware.js"
const router = express.Router();

router.post("/signup",signup)

router.post("/login",login);
router.post("/logout",logout);
router.put("/update-profile",protectroute,update)
export default router;