import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{type:String,requireed:true},
    email:{type:String,requireed:true,unique:true},
    password:{type:String,requireed:true},
    cartData:{type:Object,default:{}}

},{minimize:false})

const userModel = mongoose.models.user || mongoose.model("user",userSchema);

export default userModel;