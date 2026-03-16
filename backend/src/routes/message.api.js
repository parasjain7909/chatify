import express from "express"; 
import { getallcontacts, getmessageById,getchatpartners,sendMessage } from "../controller/message.content.js";
import { protectroute } from "../middleware/auth.middleware.js";
import { arcjetMiddleware } from "../middleware/arcjet.middleware.js";
 
const router = express.Router();
router.use(arcjetMiddleware,protectroute);
 router.get("/contacts",getallcontacts);
 router.get("/chats",getchatpartners);
 router.get("/:id",getmessageById);

router.post("/send/:id",sendMessage);
 
 
export default router;