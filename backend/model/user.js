import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    credits:{
        type:Number,
        default:100,
        min:0
    },
    avatar:{
        type:String
    },
    plan:{
        type:String,
        enum:["free","pro","enterprise"],
        default:"free"
    }
})
const User=mongoose.model("User",userSchema);
export default User;