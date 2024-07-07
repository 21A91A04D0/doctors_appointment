import mongoose from "mongoose";
let apSchema = mongoose.Schema
let appoint = new apSchema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    mobile:{
        type:String,
        required:true
    }

})
export default mongoose.model("appointmentData", appoint);