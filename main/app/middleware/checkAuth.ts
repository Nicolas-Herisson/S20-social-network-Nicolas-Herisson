import { NextFunction, Request, Response } from "express";
import { JwtPayload } from "jsonwebtoken";
import jwt from "jsonwebtoken";
import debug from "debug";

const controllerLogger = debug("main:middleware checkAuth");

export function checkAuth(req: Request, res: Response, next: NextFunction) {
    const token = req.cookies.token;
    // controllerLogger("Check token: %s", token);

    if (!token)
        return res.status(401).redirect("/");
    
    try {
        const data = jwt.verify(token, process.env.JWT_SECRET!) as JwtPayload;
        // controllerLogger("Token verified: %s", data);
        res.locals.user = data;
        next();
    } catch (error) {
        res.status(401).redirect("/");
    }
};