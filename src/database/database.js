// const mongoose=require("mongoose");
// // require("dotenv").config({ path: "config.env" });

// module.exports.connectDB=async ()=>{
//     await mongoose.connect("mongodb+srv://asisrautela612:8yKtpf6K3vUx446U@cluster0.rzce3.mongodb.net/todos")
// }

import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config({ path: 'config.env' });


export const connectDB = async () => {
  try {
    const uri = process.env.DB_URI;
    console.log('uri', uri)

    await mongoose.connect(uri);
  } catch (error) {
    process.exit(1);
  }
};
