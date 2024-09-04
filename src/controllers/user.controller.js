import { User } from "../models/user.model.js";
import jwt from "jsonwebtoken";

const createUser = async (req, res) => {
    try {
        
        const  { fullname,username, email, password }  = req.body;
        console.log(req.body.email)
        console.log("hello")
        
        if ([fullname, username, email, password].some((field) => field?.trim() === "")) {
            return res.status(400).json({ error: "All fields are required" });
        }
        
        const userExists = await User.findOne({ $or: [{ username }, { email }] });
        
        if (userExists) {
            return res.status(400).json({ error: "User already exists" });
        }
        
       
        const user = await User.create({
            fullname,
            username,
            password,
            email
        })
        
        return res.status(201).json({
            message: "User created successfully",
            user,
        });
        } catch (error) {
            console.error("Error creating user:", error.message);
            return res.status(500).json({
                error: "Internal server error. Please try again later.",
            });
    }
}

export{createUser}