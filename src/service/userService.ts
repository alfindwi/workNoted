import { UserDTO } from "../dto/userDto";
import cloudinary from "../libs/cloudinary";
import { prisma } from "../libs/prisma";

export const getUser = async (id: number) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        id,
      },
    });
    return user;
  } catch (error) {
    console.log(error);
  }
};

export const updateUser = async (
  id: number,
  data: UserDTO,
  avatar?: Express.Multer.File
) => {
  try {
    const updatePayload: any = {
      email: data.email,
      username: data.username,
    };

    if (avatar) {
      const user = await prisma.user.findUnique({ where: { id } });

      if (user?.avatarId) {
        await cloudinary.uploader.destroy(user.avatarId);
      }

      const uploaded = await new Promise<{ url: string; publicId: string }>((resolve, reject) => {
        const uploadStream = cloudinary.uploader.upload_stream(
          {
            folder: "user-avatars",
            public_id: `user_${id}_${Date.now()}`,
            resource_type: "image",
          },
          (error, result) => {
            if (error || !result) return reject(error);
            resolve({
              url: result.secure_url,
              publicId: result.public_id,
            });
          }
        );

        uploadStream.end(avatar.buffer);
      });

      updatePayload.avatar = uploaded.url;
      updatePayload.avatarId = uploaded.publicId;
    }

    const updatedUser = await prisma.user.update({
      where: { id },
      data: updatePayload,
    });

    return updatedUser;
  } catch (error) {
    console.error("Update user failed:", error);
    throw new Error("Failed to update user");
  }
};

