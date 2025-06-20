import { companyDTO } from "./../dto/companyDto";
import { prisma } from "../libs/prisma";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const getCompany = async (userId: number) => {
  try {
    const company = await prisma.company.findMany({
      where: {
        userId: userId,
      },
    });

    return company;
  } catch (error) {
    console.log(error);
    throw new Error(`Error ${(error as Error).message}`);
  }
};

export const getCompanyId = async (id: number) => {
  try {
    const company = await prisma.company.findUnique({
      where: {
        id,
      },
    });

    if (!company) {
      throw new Error("Company Not Found");
    }

    return company;
  } catch (error) {
    console.log(error);
    throw new Error(`Error ${(error as Error).message}`);
  }
};

export const createCompany = async (data: companyDTO, userId: number) => {
  try {
    const date = new Date();
    const formatedDate = date.toLocaleDateString("id-ID", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
    const company = await prisma.company.create({
      data: {
        companyName: data.companyName,
        applicationMethod: data.applicationMethod,
        applicationDate: formatedDate,
        position: data.position,
        status: data.status,
        userId,
      },
    });

    return company;
  } catch (error) {
    console.log(error);
    throw new Error(`Error creating company: ${error}`);
  }
};

export const searchCompany = async (query: string) => {
    
}

export const updateCompany = async (data: companyDTO, id: number) => {
  try {
    const existingCompany = await prisma.company.findUnique({
      where: {
        id,
      },
    });

    if (!existingCompany) {
      throw new Error("Company Not Found");
    }

    const date = new Date();
    const formatedDate = date.toLocaleDateString("id-ID", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });

    const company = await prisma.company.update({
      where: {
        id,
      },
      data: {
        companyName: data.companyName,
        applicationMethod: data.applicationMethod,
        applicationDate: formatedDate,
        position: data.position,
        status: data.status,
      },
    });

    return company;
  } catch (error) {
    console.log(error);
    throw new Error(`Error update company: ${error}`);
  }
};

export const deleteCompany = async (id: number) => {
  try {
    await prisma.company.delete({
      where: {
        id,
      },
    });
  } catch (error) {
    throw new Error(`Error deleting company: ${error}`);
  }
};
