import User from "../model/user.js";
import jwt from "jsonwebtoken";

export const authUser= async(req,res)=>{
    try {
        const {name,email,avatar}=req.body;
        if(!email){
            return res.status(400).json({
                message:"email is required!"
            })
        }
        const user=await User.findOne({email});
        if(!user){
            user=await User.create({name,email,avatar});
        }
        const token=await jwt.sign({id:user._id},process.env.JWT_SECRET,{expiresIn:"7d"});
        res.cookie("token",token,{
            httpOnly:true,
            secure:false
        })
        
    } catch (error) {
        
    }
}