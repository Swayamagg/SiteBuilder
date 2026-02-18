import mongoose from "mongoose"

const connectDB =async()=>{
      try{
       await mongoose.connect(process.env.MONGODB_URL);
       console.log("db connected");
      }catch(err){
        console.log("db error")
    }
}
export default connectDB;