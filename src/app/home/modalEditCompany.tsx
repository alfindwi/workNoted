import { InputDate } from "@/components/input-date";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAppDispatch } from "@/store";
import { getCompany, updateCompany } from "@/store/company/async";
import type { ICompany } from "@/type/ICompany";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

interface ModalEditCompanyProps {
  company: ICompany | null;
  trigger?: React.ReactNode;
}

export function ModalEditCompany({ company, trigger }: ModalEditCompanyProps) {
  if (!company) return null;
  const dispatch = useAppDispatch();
  const [companyName, setCompanyName] = useState(company.companyName || "");
  const [applicationMethod, setApplicationMethod] = useState(
    company.applicationMethod || ""
  );
  const [applicationDate, setApplicationDate] = useState(
    company.applicationDate || ""
  );
  const [position, setPosition] = useState(company.position || "");
  const [status, setStatus] = useState(company.status || "Applied");

  useEffect(() => {
    setCompanyName(company.companyName);
    setApplicationMethod(company.applicationMethod);

    const formattedDate = company.applicationDate
      ? new Date(company.applicationDate).toISOString().split("T")[0]
      : "";
    setApplicationDate(formattedDate);

    setPosition(company.position);
    setStatus(company.status || "Applied");
  }, [company]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const payload = {
      companyName,
      position,
      applicationMethod,
      applicationDate,
      status,
    };

    try {
      const result = await dispatch(
        updateCompany({ id: company.id, data: payload })
      );

      if (updateCompany.fulfilled.match(result)) {
        toast.success("Company updated successfully!", {
          duration: 3000,
          icon: "🚀",
          style: {
            background: "#3A7D44",
            color: "#FCFAEE",
            fontWeight: "600",
            borderRadius: "6px",
            boxShadow: "5px 5px 0px #222222",
            fontFamily: "monospace",
          },
        });

        await dispatch(getCompany());
      }
    } catch (error) {
      const errorMessage =
        (error as { error?: string })?.error ?? "Update failed";
      toast.error(errorMessage, {
        duration: 3000,
        icon: "🚨",
        style: {
          background: "#B8001F",
          color: "#FCFAEE",
          fontWeight: "600",
          borderRadius: "6px",
          boxShadow: "5px 5px 0px #222222",
          fontFamily: "monospace",
        },
      });
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        {trigger || (
          <Button variant="outline" className="text-sm px-3 py-1">
            Edit
          </Button>
        )}
      </DialogTrigger>

      <DialogContent className="bg-[#FFFDF6] text-black border border-black rounded-lg font-mono shadow-[8px_8px_0px_#222222]">
        <DialogHeader>
          <DialogTitle className="text-lg">{company.companyName}</DialogTitle>
          <DialogDescription className="text-sm">
            Edit informasi perusahaan
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="space-y-2 mt-4">
            <div className="grid gap-3">
              <Label>
                Company Name<span className="text-red-500">*</span>
              </Label>
              <Input
                type="text"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                placeholder="PT. XYZ"
                required
              />
            </div>
            <div className="grid gap-3">
              <Label>
                Position<span className="text-red-500">*</span>
              </Label>
              <Input
                type="text"
                value={position}
                onChange={(e) => setPosition(e.target.value)}
                placeholder="Fullstack Developer"
                required
              />
            </div>
            <div className="grid gap-3">
              <InputDate
                onChangeDate={(e) => setApplicationDate(e)}
                value={applicationDate}
              />
            </div>
            <div className="grid gap-3">
              <Label>
                Application Method<span className="text-red-500">*</span>
              </Label>
              <Input
                type="text"
                value={applicationMethod}
                onChange={(e) => setApplicationMethod(e.target.value)}
                placeholder="Email"
              />
            </div>
            <div className="grid gap-3">
              <Label>
                Application Method<span className="text-red-500">*</span>
              </Label>
              <select
                onChange={(e) => {
                  setStatus(e.target.value);
                }}
                value={status}
                className="bg-[#f2f7f5] border border-black rounded shadow-[3px_3px_0px_#343131] px-2 py-2 text-sm"
              >
                <option value="Applied">Applied</option>
                <option value="Interview">Interview</option>
                <option value="Rejected">Rejected</option>
              </select>
            </div>
          </div>

          <DialogClose asChild>
            <Button type="submit" className="mt-4" variant={"blue"}>
              Save
            </Button>
          </DialogClose>
        </form>
      </DialogContent>
    </Dialog>
  );
}
