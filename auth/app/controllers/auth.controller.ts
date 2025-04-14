import { Request, Response } from "express";
import User from "../models/user.model";
import { comparePassword, hashPassword } from "../utils";
import { generateToken } from "../utils";
import debug from "debug";

const controllerLogger = debug("auth:controller");

export async function register(req: Request, res: Response): Promise<any> {
    const { username, password, email } = req.body;

    controllerLogger("Registering user: %s", username);
    // controllerLogger("Registering password : %s", password);
    // controllerLogger("Registering email: %s", email);

    if (!username || !password || !email) 
        return res.status(400).json({ error: "Username, password, and email are required" });
    
    const hashedPassword = await hashPassword(password);
    // controllerLogger("Hashed password: %s", hashedPassword);
    
    const newUser = new User({username,password: hashedPassword, email});
    // controllerLogger("New user: %s", newUser);
    
    try {
        await newUser.save();
        res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
        res.status(500).json({ message: "Failed to register user" });
    }
};

export async function login(req: Request, res: Response): Promise<any> {
    const { password, email } = req.body;

    // controllerLogger("Logging in user: %s", email);
    // controllerLogger("Logging in password : %s", password);
    
    if ( !password || !email) 
        return res.status(400).json({ error: "password, and email are required" });
    
    try {
        const user = await User.findOne({ email });
        // controllerLogger("User found: %s", user);
    
        if (!user) 
            return res.status(401).json({ error: "Invalid credentials" });
        

        const isPasswordValid = await comparePassword(password, user.password);
        controllerLogger("Password valid: %s", isPasswordValid);

        if (!isPasswordValid) 
            return res.status(401).json({ error: "Invalid credentials" });
    

        const token = generateToken({id: user._id.toString(), username: user.username, email: user.email});
        // controllerLogger("Token generated: %s", token);

        res.json({ token });
    } catch (error) {
        controllerLogger("Failed to login: %s", error);
        res.status(500).json({ message: "Failed to login" });
    }
};

export async function listUsers(req: Request, res: Response) {
    try {
        const users = await User.find();

        if (users) 
            res.status(200).json(users);
        else 
            res.status(404).json({ message: "No users found" });
        
    } catch (error) {
        res.status(500).json({ message: "Failed to retrieve users" });
    }
};