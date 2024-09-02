import mongoose from "mongoose";

const { Schema, model } = mongoose;


const postSchema = new Schema({
    
    name: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
        trim: true,
    },
}, {
    timestamps: true, 
});


const Post = model("Post", postSchema);

export default Post;
