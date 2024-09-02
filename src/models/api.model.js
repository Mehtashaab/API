import mongoose from "mongoose"

const postSchema = new mongoose.Schema({
    id:{
        type:Number,
        required:true,
        unique:true
    },
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    }
},{timestamps:true})  

const Post = mongoose.model("Post", postSchema)

export default Post