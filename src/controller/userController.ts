import { Request, Response } from "express";
import * as userService from "../service/userService";

export const getUser = async (req: Request, res: Response) => {
    try {
        const id = +req.params.id;
        const user = await userService.getUser(id);
        res.status(200).json(user);
    } catch (error) {
        console.log(error);
        const err = error as Error;
        res.status(500).json({ error: err.message });
    }
}

export const updateUser = async (req: Request, res: Response) => {
    try {
        const id = +req.params.id;
        const user = await userService.updateUser(id, req.body, req.file);
        res.status(200).json(user);
    } catch (error) {
        console.log(error);
        const err = error as Error;
        res.status(500).json({ error: err.message });
    }
}