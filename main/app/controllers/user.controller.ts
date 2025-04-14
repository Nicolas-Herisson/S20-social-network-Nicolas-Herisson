import { Request, Response } from "express";

export const homePage = async (req: Request, res: Response) => {
    if (!res.locals.user)
        return res.render("home");
        
    res.redirect("/feed");
};

export const feedPage = async (req: Request, res: Response) => {
    res.render("feed");
};