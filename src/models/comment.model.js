import mongoose from "mongoose";
const { Schema, model } = mongoose;
const commentSchema = new Schema({
    
    name:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        trim:true
    },
    content:{
        type:String,
        required:true,
        trim:true
    }
},{versionKey:false})

const Comment = model('Comment', commentSchema);

export  {Comment};