
import aj from "../lib/arcjet.js";
import { isSpoofedBot } from "@arcjet/inspect";
 
export const arcjetMiddleware = async (req, res, next) => {
  try {
    const decision = await aj.protect(req, { requested: 1 }); // Deduct 1 token from the bucket
    if (decision.isDenied()) {
      if (decision.reason.isRateLimit()) {
        return res.status(429).json({ error: "Too Many Requests" });}
        else if (decision.reason.isBot()) {
          return res.status(403).json({ error: "Forbidden" });
        }else {
          return res.status(403).json({ error: "Forbidden" });
        }
    }
    next();
  } catch (error) {
    console.error("Arcjet middleware error", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};