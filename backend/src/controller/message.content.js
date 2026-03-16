import message from "../models/message.js";
import user from "../models/user.js";



export const getallcontacts = async(req, res) =>{
    try{
        const loggedUserId = req.user._id;
        const filtreredMessages = await user.find({_id: {$ne: loggedUserId}}).select("-password");
        res.status(200).json(filtreredMessages);
    }catch(err){
        console.log("error in getallcontacts",err);
        res.status(500).json({message: "server error"});   }}
export const getmessageById = async(req, res) =>{
    try{
    const myId = req.user._id;
    const {id} = req.params;
     const messages = await message.find({
        $or: [
            {senderId: myId, reciverId: id},
            {senderId: id, reciverId: myId}
        ],});
        res.status(200).json(messages);
    } catch (err) {
        console.log("error in getmessageById",err);
        res.status(500).json({message: "server error"});   
        }};

export const sendMessage = async(req, res) =>{
    try{
        const {text, image} = req.body;
        const {id: receiverId} = req.params;
        const senderId  = req.user._id;
        let imageurl;
        if(image){
            const uploadresult = await cloudinary.uploader.upload(image);
            imageurl = uploadresult.secure_url;
        }
        const newmessage = new message({
            senderId,
            reciverId: receiverId,
            text,
            image: imageurl
        });
        await newmessage.save();
        res.status(201).json({message: "Message sent successfully"});
    } catch (err) {
        console.log("error in sendMessage",err);
        res.status(500).json({message: "server error"});   
    }
};

export const getchatpartners = async(req, res) =>{
    try{
        const loggedUserId = req.user._id; 
        const messages = await message.find({
            $or: [
                {senderId: loggedUserId},{reciverId: loggedUserId}],
            });

 const chatpartnersIds=[ ...new Set(messages.map(msg => msg.senderId.toString() === loggedUserId.toString()
     ? msg.reciverId.toString() 
     : msg.senderId.toString()))];

     const chatpartners = await user.find({_id: {$in: chatpartnersIds}}).select("-password");
     res.status(200).json(chatpartners);
} catch (err) {
    console.log("error in getchatpartners",err);
    res.status(500).json({message: "server error"});
    }};