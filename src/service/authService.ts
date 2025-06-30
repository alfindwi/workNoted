import { LoginDTO, RegisterDTO } from "../dto/authDto";
import { OAuthDTO } from "../dto/userDto";
import { prisma } from "../libs/prisma";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const login = async (data: LoginDTO) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        email: data.email,
      },
    });

    if (!user) {
      throw new Error("User Not Found");
    }

    const isValidPassword = await bcrypt.compare(
      data.password,
      user.password ?? ""
    );

    if (!isValidPassword) {
      throw new Error("Email/Password incorrect");
    }

    if (!process.env.JWT_SECRET) {
      throw new Error("JWT_SECRET environment variable is not set");
    }

    const token = jwt.sign(
      {
        id: user.id,
        email: user.email,
        username: user.username,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1d",
      }
    );

    return {
      token,
      user: {
        id: user.id,
        email: user.email,
        username: user.username,
      },
    };
  } catch (error) {
    console.log("Login Error" + error);
  }
};

export const register = async (data: RegisterDTO) => {
  try {
    const existedUser = await prisma.user.findUnique({
      where: {
        email: data.email,
      },
    });

    if (existedUser) {
      throw new Error("Email Already exist");
    }

    const hashedPassword = await bcrypt.hash(data.password, 5);

    const user = await prisma.user.create({
      data: {
        email: data.email,
        username: data.username,
        password: hashedPassword,
      },
    });

    return user;
  } catch (error) {
    console.log("Register Error " + error);
    throw error;
  }
};

export const findOrCreateOAuthUser = async (data: OAuthDTO) => {
  try {
    let user = await prisma.user.findFirst({
      where: {
        provider: data.provider,
        providerId: data.providerId,
      },
    });

    if (!user) {
      user = await prisma.user.create({
        data: {
          email: data.email,
          username: data.username,
          provider: data.provider,
          providerId: data.providerId,
        },
      });
    }

    if (!process.env.JWT_SECRET) {
      throw new Error("JWT_SECRET environment variable is not set");
    }

    const token = jwt.sign(
      {
        id: user.id,
        email: user.email,
        username: user.username,
        provider: user.provider,
      },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    return {
      token,
      user: {
        id: user.id,
        email: user.email,
        username: user.username,
        provider: user.provider,
        providerId: user.providerId,
      },
    };
  } catch (error) {
    console.error("OAuth Login Error", error);
    throw error;
  }
};
