import User from "../models/user.model";
import { Request, Response } from "express";

export const getAllUsers = async (req: Request, res: Response) => {
    try {
        const users = await User.find();

        if (users)
            res.status(200).render("home", { users });
        else
            res.status(404).json({ error: "No users found" });
        
    } catch (error) {
        res.status(500).json({ error: "Failed to retrieve users" });
    }
};