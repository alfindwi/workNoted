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
import type { ICompany } from "@/type/ICompany";
import { useState } from "react";

interface ModalEditCompanyProps {
  company: ICompany | null;
  trigger?: React.ReactNode;
}

export function ModalEditCompany({ company, trigger }: ModalEditCompanyProps) {
  if (!company) return null;
  const [formData, setFormData] = useState<ICompany>(company);

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

        <div className="space-y-2 mt-4">
          <div className="grid gap-3">
            <Label>
              Company Name<span className="text-red-500">*</span>
            </Label>
            <Input
              type="text"
              onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
              value={formData.companyName}
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
              value={formData.position}
              onChange={(e) => setFormData({ ...formData, position: e.target.value })}
              placeholder="PT. XYZ"
              required
            />
          </div>
          <div className="grid gap-3">
            <Label>
              Application Method<span className="text-red-500">*</span>
            </Label>
            <Input
              type="text"
              value={formData.applicationMethod}
              onChange={(e) => setFormData({ ...formData, applicationMethod: e.target.value })}
              placeholder="PT. XYZ"
            />
          </div>
        </div>

        <DialogClose asChild>
          <Button type="submit" variant={"blue"}>
            Save
          </Button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
}
