import mongoose from "mongoose";
import Post from "../models/api.model.js";

// Create User
const createUser = async (req, res) => {
    try {
        const { name, description } = req.body;

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

// Get User by ID
const getUserById = async (req, res) => {
    try {
        const { id } = req.params;
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ error: "Invalid ID format" });
        }

        const user = await Post.findById(id);

        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        return res.status(200).json({
            message: "User retrieved successfully",
            user,
        });
    } catch (error) {
        console.error("Error retrieving user:", error.message);
        return res.status(500).json({
            error: "Internal server error. Please try again later.",
        });
    }
};

// Update User
const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ error: "Invalid ID format" });
        }

        const { name, description } = req.body;
        if ([name, description].some((field) => field?.trim() === "")) {
            return res.status(400).json({ error: "All fields are required" });
        }

        const user = await Post.findByIdAndUpdate(
            id,
            { name, description },
            { new: true }
        );

        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        return res.status(200).json({
            message: "User updated successfully",
            user,
        });
    } catch (error) {
        console.error("Error updating user:", error.message);
        return res.status(500).json({
            error: "Internal server error. Please try again later.",
        });
    }
};

// Delete User
const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ error: "Invalid ID format" });
        }

        const user = await Post.findByIdAndDelete(id);

        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        return res.status(200).json({
            message: "User deleted successfully",
        });
    } catch (error) {
        console.error("Error deleting user:", error.message);
        return res.status(500).json({
            error: "Internal server error. Please try again later.",
        });
    }
};

export { createUser, getUsers, getUserById, updateUser, deleteUser };
