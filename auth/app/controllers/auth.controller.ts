import { Request, Response } from "express";
import User from "../models/user.model";
import { comparePassword, hashPassword } from "../utils";
import { generateToken } from "../utils";

export async function register(req: Request, res: Response): Promise<any> {
    const { username, password } = req.body;

    if (!username || !password) 
        return res.status(400).json({ error: "Username and password are required" });
    

    const hashedPassword = await hashPassword(password);
    const newUser = new User({username, hashedPassword});

    try {
        await newUser.save();
        res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
        res.status(500).json({ error: "Failed to register user" });
    }
};

export async function login(req: Request, res: Response): Promise<any> {
    const { username, password } = req.body;

    if (!username || !password) 
        return res.status(400).json({ error: "Username and password are required" });
    

    try {
        const user = await User.findOne({ username });

        if (!user) 
            return res.status(401).json({ error: "Invalid credentials" });
        

        const isPasswordValid = await comparePassword(password, user.password);

        if (!isPasswordValid) 
            return res.status(401).json({ error: "Invalid credentials" });
    

        res.status(200).json({ message: "Login successful" });

        const token = generateToken({id: user._id.toString(), username: user.username});
        res.json({ token, user });
    } catch (error) {
        res.status(500).json({ error: "Failed to login" });
    }
};

export async function listUsers(req: Request, res: Response) {
    try {
        const users = await User.find();

        if (users) 
            res.status(200).json(users);
        else 
            res.status(404).json({ error: "No users found" });
    } catch (error) {
        res.status(500).json({ error: "Failed to retrieve users" });
    }
};