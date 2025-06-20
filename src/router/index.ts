import { Router } from "express";
import authRouter from "./auth";
import companyRouter from "./company"

const router = Router();

router.use("/auth", authRouter);
router.use("/company", companyRouter)

export default router;
