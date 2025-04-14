import express from "express";
import * as userController from "../controllers/user.controller";
import { checkAuth } from "../middleware/checkAuth";

const userRouter = express.Router();

userRouter.get("/", userController.homePage);
userRouter.get("/feed", checkAuth, userController.feedPage);

export default userRouter;
