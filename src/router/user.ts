import { Router } from "express";
import * as userController from "../controller/userController";
import { authentication } from "../middlewares/authentication";
import upload from "../middlewares/uploadFile";

const userRouter = Router();

userRouter.get("/:id", authentication, userController.getUser);
userRouter.put("/", authentication, upload.single("avatar"),userController.updateUser);

export default userRouter;
