import { Request, Response } from "express";
import { LoginDTO, RegisterDTO } from "../dto/authDto";
import * as authService from "../service/authService";

export const login = async (req: Request, res: Response) => {
  try {
    const data = req.body as LoginDTO;

    const token = await authService.login(data);
    res.json(token);
  } catch (error) {
    console.log(error);

    const err = error as Error;
    res.status(500).json({ error: err.message });
  }
};

export const register = async (req: Request, res: Response) => {
  try {
    const data = req.body as RegisterDTO;

    const user = await authService.register(data);

    res.json({ user });
  } catch (error) {
    console.log(error);

    const err = error as Error;
    res.status(500).json({ error: err.message });
  }
};

export const oauthSuccessController = (req: Request, res: Response) => {
  const user = req.user as { token: string };

  if (!user || !user.token) {
    return res.redirect("http://localhost:5173/login?error=unauthorized");
  }

  return res.redirect(
    `http://localhost:5173/oauth-success?token=${user.token}`
  );
};
