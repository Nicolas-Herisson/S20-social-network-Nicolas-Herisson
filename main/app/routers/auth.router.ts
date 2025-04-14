import express from "express";
import * as authController from "../controllers/auth.controller";

const router = express.Router();

router.get("/login", authController.loginPage);
router.get("/register", authController.registerPage);
router.get("/logout", authController.logout);

router.post("/register", authController.register);
router.post("/login", authController.login);

router.get("/users/list", authController.listUsers);

export default router;
