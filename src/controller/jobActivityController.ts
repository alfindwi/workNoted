import { Request, Response } from "express";
import * as jobActivityService from "../service/jobActivityService";
import { JobActivityDTO } from "../dto/jobActivityDto";

export const getJob = async (req: Request, res: Response) => {
  try {
    const companyId = +req.params.companyId;
    const getJobActivity = await jobActivityService.getJobActivity(companyId);

    res.status(200).json(getJobActivity);
  } catch (error) {
    console.log(error);

    const err = error as Error;
    res.status(500).json({ error: err.message });
  }
};

export const createJob = async (req: Request, res: Response) => {
  try {
    const data = req.body as JobActivityDTO;
    const companyId = +req.params.companyId;
    const createJobActivity = await jobActivityService.crateJobActivity(data, companyId);
    res.status(200).json(createJobActivity);
  } catch (error) {
    console.log(error);
    const err = error as Error;
    res.status(500).json({ error: err.message });
  }
};

export const updateJob = async (req: Request, res: Response) => {
  try {
    const data = req.body as JobActivityDTO;
    const id = +req.params.id;
    const updateJobActivity = await jobActivityService.updateJobActivity(data, id);
    res.status(200).json(updateJobActivity);
  } catch (error) {
    console.log(error);
    const err = error as Error;
    res.status(500).json({ error: err.message });
  }
};

export const deleteJob = async (req: Request, res: Response) => {
  try {
    const id = +req.params.id;
    await jobActivityService.deleteJobActivity(id);
    res.status(200).json({ message: "Delete Success" });
  } catch (error) {
    console.log(error);
    const err = error as Error;
    res.status(500).json({ error: err.message });
  }
};