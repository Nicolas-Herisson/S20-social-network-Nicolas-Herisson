import { Request, Response } from "express";
// import User from "../models/user.model";
import { comparePassword, hashPassword } from "../utils";
import { generateToken } from "../utils";
import debug from "debug";
import axios from "axios";


const api_url = process.env.API_URL!;
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
    

    //const newUser = new User({username,password: hashedPassword, email});
    // controllerLogger("New user: %s", newUser);
    
    try {
        const {data} = await axios.post(`${api_url}/api/users/create`, {username, password: hashedPassword, email});
        //await newUser.save();
        controllerLogger("User registered successfully: %s", data);
        res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
        res.status(500).json({ message: "Failed to register user" });
    }
}

export async function login(req: Request, res: Response): Promise<any> {
    const { password, email } = req.body;

    // controllerLogger("Logging in user: %s", email);
    // controllerLogger("Logging in password : %s", password);
    
    if ( !password || !email) 
        return res.status(400).json({ error: "password, and email are required" });
    
    try {
        const {data} = await axios.get(`${api_url}/api/users/detail`, {data: {password, email}});
        // const user = await User.findOne({ email });
        // controllerLogger("User found: %s", user);

        if (!data) 
            return res.status(401).json({ error: "Invalid credentials" });
        

        const isPasswordValid = await comparePassword(password, data.password);
        controllerLogger("Password valid: %s", isPasswordValid);

        if (!isPasswordValid) 
            return res.status(401).json({ error: "Invalid credentials" });
    

        const token = generateToken({id: data._id.toString(), username: data.username, email: data.email});
        // controllerLogger("Token generated: %s", token);

        res.json({ token });
    } catch (error) {
        controllerLogger("Failed to login: %s", error);
        res.status(500).json({ message: "Failed to login" });
    }
};

export async function listUsers(req: Request, res: Response) {
    try {
        const {data} = await axios.get(`${api_url}/api/users/list`);

        if (data) 
            res.status(200).json(data);
        else 
            res.status(404).json({ message: "No users found" });
        
    } catch (error) {
        res.status(500).json({ message: "Failed to retrieve users" });
    }
};