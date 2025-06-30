import { Router } from "express";
import authRouter from "./auth";
import companyRouter from "./company"
import jobRouter from "./jobActivity";

const router = Router();

router.use("/auth", authRouter);
router.use("/company", companyRouter)
router.use("/job", jobRouter)

export default router;
