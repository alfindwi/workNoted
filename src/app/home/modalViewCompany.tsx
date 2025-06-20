import * as React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import type { ICompany } from "@/type/ICompany";

interface ModalViewCompanyProps {
  company: ICompany | null;
  trigger?: React.ReactNode;
}

export function ModalViewCompany({ company, trigger }: ModalViewCompanyProps) {
  if (!company) return null;

  return (
    <Dialog>
      <DialogTrigger asChild>
        {trigger || (
          <Button variant="outline" className="text-sm px-3 py-1">
            View
          </Button>
        )}
      </DialogTrigger>

      <DialogContent className="bg-[#FFFDF6] text-black border border-black rounded-lg font-mono shadow-[8px_8px_0px_#222222]">
        <DialogHeader>
          <DialogTitle className="text-lg">{company.companyName}</DialogTitle>
          <DialogDescription className="text-sm">
            Company information details
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-2 mt-4">
          <p>
            <span className="font-semibold">Position:</span> {company.position}
          </p>
          <p>
            <span className="font-semibold">Applied At:</span>{" "}
            {company.applicationDate}
          </p>
          <p>
            <span className="font-semibold">Method:</span>{" "}
            {company.applicationMethod}
          </p>
          <p>
            <span className="font-semibold">Status:</span> {company.status}
          </p>
        </div>

        <DialogClose asChild>
          <Button
            variant="outline"
            className="mt-4 border cursor-pointer border-black shadow-[3px_3px_0px_#343131]"
          >
            Close
          </Button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
}
