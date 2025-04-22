import { Request, Response } from "express";
import User from "../models/user.model";
import debug from "debug";

const controllerLogger = debug("api:userController");

export async function list(req: Request, res: Response): Promise<any> {
    try {
        controllerLogger("In list");
        const users = await User.find();
        controllerLogger("Retrieved %s users", users.length);
        console.log("Retrieved %s users", users.length);
    
        if (users) 
            res.status(200).json(users);
        else 
            res.status(404).json({ message: "No users found" });
        
    } catch (error) {
        controllerLogger("Failed to retrieve users: %s", error);
        res.status(500).json({ message: "Failed to retrieve users" });
    }
};
    

export async function findByEmail(req: Request, res: Response): Promise<any> {
    controllerLogger("In details by email");
    const {email} = req.params;
    
    try {
        const user = await User.findOne({ email });
        if (!user) 
            return res.status(404).json({ message: "User not found" });
        res.status(200).json(user);
    } catch (error) {
        controllerLogger("Failed to retrieve user: %s", error);
        res.status(500).json({ message: "Failed to retrieve user" });
    }
};

export async function create(req: Request, res: Response): Promise<any> {
    controllerLogger("In create");
    const { username, password, email } = req.body;

    controllerLogger("Registering user: %s", username);
    // controllerLogger("Registering password : %s", password);
    // controllerLogger("Registering email: %s", email);

    if (!username || !password || !email) 
        return res.status(400).json({ error: "Username, password, and email are required" });
    

    const newUser = new User({username,password, email});
    // controllerLogger("New user: %s", newUser);
    
    try {
        await newUser.save();
        res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
        controllerLogger("Failed to register user: %s", error);
        res.status(500).json({ message: "Failed to register user" });
    }
};

export async function update(req: Request, res: Response): Promise<any> {
    controllerLogger("In fullUpdate")
    const user= req.body
    
    if (!user)
        return res.status(400).json({message: "No updates"})

    const existsUser = await User.findOne({ email: user.email });

    if (!existsUser)
        return res.status(404).json({ message: "User not found" });
    
    try {
        const updatedUser = await User.updateOne({ email: user.email }, user);
        if (!updatedUser)
            return res.status(404).json({ message: "User not found" });
        
        res.status(200).json(updatedUser);
    } catch (error) {
        controllerLogger("Failed to update user: %s", error);
        res.status(500).json({ message: "Failed to update user" });
    }
};


export async function supress(req: Request, res: Response): Promise<any> {
    controllerLogger("In supress")
    const {email} = req.body;
    
    if (!email)
        return res.status(400).json({ error: "User email is required" });
    
    try {
        const deletedUser = await User.findOneAndDelete({ email });
        if (!deletedUser)
            return res.status(404).json({ message: "User not found" });
        
        res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
        controllerLogger("Failed to delete user: %s", error);
        res.status(500).json({ message: "Failed to delete user" });
    }
};
