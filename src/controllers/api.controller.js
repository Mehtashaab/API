import mongoose from "mongoose";
import Post from "../models/api.model.js";

// Create User
const createUser = async (req, res) => {
    try {
        const {  name, description } = req.body;
        

        if ([name, description].some((field) => field?.trim() === "")) {
            return res.status(400).json({ error: "All fields are required" });
        }

        const user = await Post.create({ name, description });

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
};

// Get All Users
const getUsers = async (req, res) => {
    try {
        const users = await Post.find();
        return res.status(200).json({
            message: "Users retrieved successfully",
            users,
        });
    } catch (error) {
        console.error("Error retrieving users:", error.message);
        return res.status(500).json({
            error: "Internal server error. Please try again later.",
        });
    }
};


export { createUser, getUsers };
