import { JobActivityDTO } from "../dto/jobActivityDto";
import { prisma } from "../libs/prisma";

export const getJobActivity = async (companyId: number) => {
  try {
    const jobActivity = await prisma.jobActivity.findMany({
      where: {
        companyId
      },
    });

    return jobActivity;
  } catch (error) {
    console.log(error);
  }
};

export const crateJobActivity = async (data: JobActivityDTO, companyId: number) => {
  try {
    const create = await prisma.jobActivity.create({
      data: {
        activity: data.activity,
        date: data.date,
        notes: data.notes,
        companyId
      },
    });
    return create;
  } catch (error) {
    console.log(error);
  }
};

export const updateJobActivity = async (data: JobActivityDTO, id: number) => {
  try {
    const update = await prisma.jobActivity.update({
      where: {
        id,
      },
      data: {
        activity: data.activity,
        date: data.date,
        notes: data.notes,
      },
    });
    return update;
  } catch (error) {
    console.log(error);
  }
};

export const deleteJobActivity = async (id: number) => {
  try {
    const deleted = await prisma.jobActivity.delete({
      where: {
        id,
      },
    });
    return deleted;
  } catch (error) {
    console.log(error);
  }
};