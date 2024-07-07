import mongoose from "mongoose";

const Doctors = mongoose.Schema;
const doc = new Doctors({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    }
})

export default mongoose.model("doctors", doc)