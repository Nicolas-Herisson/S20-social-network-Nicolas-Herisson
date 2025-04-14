import { Request, Response } from "express";
import axios from "axios";
import debug from "debug";
import jwt from "jsonwebtoken";

const controllerLogger = debug("main:authController");

const AUTH_SERVICE_URL = process.env.AUTHENTIFICATION_SERVICE_URL!;

export const loginPage = async (req: Request, res: Response) => {
    res.render("login", {message: null});
};

export const registerPage = async (req: Request, res: Response) => {
    res.render("register", {message: null});
};


export async function register(req: Request, res: Response): Promise<any> {
    try {
        const body = req.body;
        controllerLogger("Registering body: %s", body);
        controllerLogger("username: %s", body.username);
        // controllerLogger("password: %s", body.password);
        // controllerLogger("email: %s", body.email);
        
       
        if (!body.username || !body.password || !body.email) 
            return res.status(400).json({ error: "Username, password, and email are required" });
        

        const response = await axios.post(`${AUTH_SERVICE_URL}/register`, body);
        controllerLogger("Registering response, %s", response.data);

        res.status(200).render("login", { message: "User registered successfully", redirect: true });
    } catch (error) {
        res.status(500).render("register", { message: "Failed to register user", redirect: true });
    }
}

export async function login(req: Request, res: Response): Promise<any> {
    try {
        const body = req.body;

        if (!body.email || !body.password) 
            return res.status(400).json({ error: "Email and password are required" });
        

        const result = await axios.post(`${AUTH_SERVICE_URL}/login`, body);

        //      httpOnly: only via http | sameSite: strict =  domain's name only
        res.cookie("token", result.data.token, { sameSite: "strict", httpOnly: true });
        
        res.status(200).redirect("/feed");
    } catch (error) {
        res.status(500).render("login", { message: "Username or password is incorrect", redirect: true });
    }
};

export async function listUsers(req: Request, res: Response): Promise<any> {
    try {
        const response = await axios.get(`${AUTH_SERVICE_URL}/users/list`);

        return res.status(200).json(response.data);
    } catch (error) {
        res.status(500).json({ error: "Failed to retrieve users" });
    }
};

export async function logout(req: Request, res: Response): Promise<any> {
    try {
        res.clearCookie("token");
        res.status(200).redirect("/");
    } catch (error) {
        res.status(500).json({ error: "Failed to logout" });
    }
};
