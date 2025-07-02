import { Router } from "express";
import * as authController from "../controller/authController";
import passport from "passport";

const authRouter = Router();

authRouter.post("/login", authController.login);
authRouter.post("/register", authController.register);
authRouter.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

authRouter.get(
  "/google/callback",
  passport.authenticate("google", {
    session: false,
    failureRedirect: "http://localhost:5173/login?error=access_denied",
  }),
  authController.oauthSuccessController
);

authRouter.get(
  "/github",
  passport.authenticate("github", { scope: ["user:email"] })
);

authRouter.get(
  "/github/callback",
  passport.authenticate("github", {
    session: false,
    failureRedirect: "http://localhost:5173/login?error=access_denied",
  }),
  authController.oauthSuccessController
);

export default authRouter;
