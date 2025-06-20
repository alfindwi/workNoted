import { Status } from "@prisma/client";

export interface companyDTO {
  companyName: string;
  position: string;
  applicationDate: String;
  applicationMethod: string;
  status: Status;
  userId: number;
}
