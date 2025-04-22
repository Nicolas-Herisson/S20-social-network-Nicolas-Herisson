import express from "express";
import * as userController from "../controllers/user.controller";

const userRouter = express.Router();

userRouter.get("/:email", userController.findByEmail);

userRouter.get("/", userController.list);

userRouter.post("/", userController.create);

userRouter.put("/", userController.update);


userRouter.delete("/", userController.supress);

export default userRouter;
