import { Request, Response } from "express";
import * as companyService from "../service/companyService";
import { companyDTO } from "../dto/companyDto";

export const getCompany = async (req: Request, res: Response) => {
  try {
    const userId = res.locals.user.id;
    const company = await companyService.getCompany(userId);
    res.status(200).json(company);
  } catch (error) {
    console.log(error);

    const err = error as Error;
    res.status(500).json({ error: err.message });
  }
};

export const getCompanyById = async (req: Request, res: Response) => {
  try {
    const id = +req.params.id;
    const company = await companyService.getCompanyId(id);
    res.status(200).json(company);
  } catch (error) {
    console.log(error);

    const err = error as Error;
    res.status(500).json({ error: err.message });
  }
};

export const createCompany = async (req: Request, res: Response) => {
  try {
    const userId = res.locals.user.id;
    const company = await companyService.createCompany(req.body, userId);

    res.status(200).json({ company });
  } catch (error) {
    console.log(error);
    const err = error as Error;
    res.status(500).json({ error: err.message });
  }
};

export const updateCompany = async (req: Request, res: Response) => {
  try {
    const id = +req.params.id;
    const body: companyDTO = req.body;

    const company = await companyService.updateCompany(body, id);
    res.status(200).json({ message: "Update Success", company });
  } catch (error) {
    console.log(error);
    const err = error as Error;
    res.status(500).json({ error: err.message });
  }
};

export const deleteCompany = async (req: Request, res: Response) => {
  try {
    const id = +req.params.id;

    await companyService.deleteCompany(id);

    res.status(200).json({ message: "Delete Success" });
  } catch (error) {
    console.log("error", error);
    const err = error as Error;
    res.status(500).json({ error: err.message });
  }
};
