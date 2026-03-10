import bcrypt from "bcrypt";
import User from "../models/user.js";
 
import { generateToken } from "../lib/util.js";
export const signup = async(req, res) =>{

    const {username, email, password} = req.body; // jo user ne  bheja
    try{
    if(!username || !email || !password){
        return res.status(400).json({message: "all fields are required"});
    }
    if(password.length < 6){
        return res.status(400).json({message: "password must be at least 6 characters"});
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailRegex.test(email)){
        return res.status(400).json({message: "invalid email"});
    }
    const user = await User.findOne({email});
    if(user){
        return res.status(400).json({message: "email already exists"});

    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new User({
        username,
        email,
        password: hashedPassword
    });
    if(newUser){
        generateToken(newUser._id, res);
        await newUser.save();
        res.status(201).json({_id: newUser._id,
             username: newUser.username,
              email: newUser.email, 
              profilepic: newUser.profilepic    });
    }
    else{
        res.status(400).json({message: "invalid user data"});
    }
}catch(err){
    console.log("there is an error",err);
    res.status(500).json({message: "server error"});   }     
}