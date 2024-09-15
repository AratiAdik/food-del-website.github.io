import mongoose from "mongoose";

export const connectDB= async()=>{
    await mongoose.connect('mongodb+srv://artiadik:9322727478@cluster0.ox6fh.mongodb.net/food-del').then
    (()=> console.log("DB Connected"));
}