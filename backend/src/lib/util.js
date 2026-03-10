import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const generateToken = (userid, res) => {
    const token = jwt.sign({id: userid}, process.env.JWT_SECRET, {expiresIn: "1d"});
    res.cookie("token", token, {
        httpOnly: true,
        sameSite : "strict",
        secure : process.env.NODE_ENV === "development" ? false : true,
        maxAge: 24 * 60 * 60 * 1000 // 1 day MS 
    });
    return token;
};