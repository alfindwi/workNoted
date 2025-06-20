import { Router } from "express";
import * as authController from "../controller/authController";

const authRouter = Router();

authRouter.post("/login", authController.login);
authRouter.post("/register", authController.register);

export default authRouter;
