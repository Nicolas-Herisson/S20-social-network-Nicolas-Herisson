import express from "express";
import * as userController from "../controllers/user.controller";

const userRouter = express.Router();

userRouter.get("/detail", userController.detail);

userRouter.get("/list", userController.list);

userRouter.post("/create", userController.create);

userRouter.put("/fullUpdate", userController.fullUpdate);

userRouter.patch("/partialUpdate", userController.partialUpdate);

userRouter.delete("/delete", userController.supress);

// userRouter.get("/:email", userController.detailByEmail);
// userRouter.get("/:id", userController.detailById);

export default userRouter;
