import { authentication } from "./../middlewares/authentication";
import { Router } from "express";
import * as companyController from "../controller/companyController";

const companyRouter = Router();

companyRouter.get("/", authentication, companyController.getCompany);
companyRouter.get("/:id", authentication, companyController.getCompanyById);
companyRouter.post("/", authentication, companyController.createCompany);
companyRouter.put("/:id", authentication, companyController.updateCompany);
companyRouter.delete("/:id", authentication, companyController.deleteCompany);

export default companyRouter;
