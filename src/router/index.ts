import { Router } from "express";
import authRouter from "./auth";
import companyRouter from "./company"
import jobRouter from "./jobActivity";
import userRouter from "./user";

const router = Router();

router.use("/auth", authRouter);
router.use("/company", companyRouter)
router.use("/job", jobRouter);
router.use("/user", userRouter);

export default router;
