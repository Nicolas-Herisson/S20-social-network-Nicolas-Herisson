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

export async function detail(req: Request, res: Response): Promise<any>
{
    controllerLogger("In details");

    const { username, email } = req.body || {};

    
    try {
        const existingUser = await User.findOne({
            $or: [
                { username },
                { email }
            ] 
              
          });
        if (!existingUser) 
            return res.status(404).json({ message: "User not found" });
        res.status(200).json(existingUser);
    } catch (error) {
        controllerLogger("Failed to retrieve user: %s", error);
        res.status(500).json({ message: "Failed to retrieve user" });
    }
};
    
export async function detailById(req: Request, res: Response): Promise<any> {
    controllerLogger("In details by id");
    const {id} = req.params;
    
    try {
        const user = await User.findById(id);
        if (!user) 
            return res.status(404).json({ message: "User not found" });
        res.status(200).json(user);
    } catch (error) {
        controllerLogger("Failed to retrieve user: %s", error);
        res.status(500).json({ message: "Failed to retrieve user" });
    }
};

export async function detailByEmail(req: Request, res: Response): Promise<any> {
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

export async function fullUpdate(req: Request, res: Response): Promise<any> {
    controllerLogger("In fullUpdate")
    const {user} = req.body;
    
    if (!user)
        return res.status(400).json({ error: "User is required" });
    
    try {
        const updatedUser = await User.findByIdAndUpdate(user._id, user, { new: true });
        if (!updatedUser)
            return res.status(404).json({ message: "User not found" });
        
        res.status(200).json(updatedUser);
    } catch (error) {
        controllerLogger("Failed to update user: %s", error);
        res.status(500).json({ message: "Failed to update user" });
    }
};


export async function partialUpdate(req: Request, res: Response): Promise<any> {
    controllerLogger("In partialUpdate");
    const {user} = req.body;
    
    if (!user)
        return res.status(400).json({ error: "User is required" });
    
    try {
        const updatedUser = await User.findByIdAndUpdate(user._id, user, { new: true });
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
    const {user} = req.body;
    
    if (!user)
        return res.status(400).json({ error: "User is required" });
    
    try {
        const deletedUser = await User.findByIdAndDelete(user._id);
        if (!deletedUser)
            return res.status(404).json({ message: "User not found" });
        
        res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
        controllerLogger("Failed to delete user: %s", error);
        res.status(500).json({ message: "Failed to delete user" });
    }
};
