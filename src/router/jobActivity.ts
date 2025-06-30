import { Router } from "express";
import * as jobActivityController from "../controller/jobActivityController";
import { authentication } from "../middlewares/authentication";

const jobRouter = Router();

jobRouter.get("/:companyId", authentication ,jobActivityController.getJob);
jobRouter.post("/:companyId", authentication, jobActivityController.createJob);
jobRouter.put("/:id", authentication, jobActivityController.updateJob);
jobRouter.delete("/:id", authentication, jobActivityController.deleteJob);

export default jobRouter;
