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
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { InputDate } from "@/components/input-date";

interface ModalInputCompanyProps {
  trigger?: React.ReactNode;
}

export function ModalInputCompany({ trigger }: ModalInputCompanyProps) {
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
          <DialogTitle className="text-lg">Create Company</DialogTitle>
          <DialogDescription className="text-sm">
            Create company information, position, method and date
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-2 mt-4">
          <div className="grid gap-3">
            <Label>
              Company Name<span className="text-red-500">*</span>
            </Label>
            <Input type="text" placeholder="PT. XYZ" required />
          </div>
          <div className="grid gap-3 mt-4">
            <Label>
              Position<span className="text-red-500">*</span>
            </Label>
            <Input type="text" placeholder="Fullstack Developer" required />
          </div>
          <div className="grid gap-3">
            <InputDate />
          </div>
          <div className="grid gap-3 mt-4">
            <Label>
              Application Method<span className="text-red-500">*</span>
            </Label>
            <Input type="text" placeholder="Email" required />
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
