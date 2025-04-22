import express from "express";
import * as authController from "../controllers/auth.controller";

const authRouter = express.Router();

authRouter.post("/register", authController.register);

authRouter.post("/login", authController.login);

authRouter.get("/users/list", authController.listUsers);

export default authRouter;
