import mongoose from "mongoose";

export const connectDB = async () =>{
    await mongoose.connect('mongodb+srv://surendrabhai:235711@cluster0.urw25eg.mongodb.net/mern-food-delivery-app').then(()=>{
       console.log('DB connected') ;
    })
}