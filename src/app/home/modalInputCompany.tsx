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
import { useAppDispatch, useAppSelector } from "@/store";
import { createCompany, getCompany } from "@/store/company/async";
import { Loader2Icon } from "lucide-react";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

interface ModalInputCompanyProps {
  trigger?: React.ReactNode;
}

export function ModalInputCompany({ trigger }: ModalInputCompanyProps) {
  const dispatch = useAppDispatch();

  const [companyName, setCompanyName] = useState("");
  const [position, setPosition] = useState("");
  const [applicationMethod, setApplicationMethod] = useState("");
  const [applicationDate, setApplicationDate] = useState("");
  const [status, setStatus] = useState("");

  const { loading } = useAppSelector((state) => state.company);

  useEffect(() => {
    dispatch(getCompany());
  }, [dispatch]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const payload = {
      id: 0,
      companyName,
      position,
      applicationMethod,
      applicationDate,
      status,
    };

    try {
      const data = await dispatch(createCompany(payload));
      if (createCompany.fulfilled.match(data)) {
        toast.success("Company created successfully!", {
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
      console.log(error);
      const errorMessage = (error as { error?: string })?.error ?? "";
      toast.error(errorMessage, {
        duration: 3000,
        icon: "🚀",
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
          <DialogTitle className="text-lg">Create Company</DialogTitle>
          <DialogDescription className="text-sm">
            Create company information, position, method and date
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
                placeholder="PT. XYZ"
                required
                onChange={(e) => setCompanyName(e.target.value)}
              />
            </div>
            <div className="grid gap-3 mt-4">
              <Label>
                Position<span className="text-red-500">*</span>
              </Label>
              <Input
                type="text"
                placeholder="Fullstack Developer"
                required
                onChange={(e) => setPosition(e.target.value)}
              />
            </div>
            <div className="grid gap-3">
              <InputDate onChangeDate={(e) => setApplicationDate(e)}  />
            </div>
            <div className="grid gap-3 mt-4">
              <Label>
                Application Method<span className="text-red-500">*</span>
              </Label>
              <Input
                type="text"
                placeholder="Email"
                required
                onChange={(e) => setApplicationMethod(e.target.value)}
              />
            </div>
            <div className="grid gap-3 mt-4">
              <Label htmlFor="status">
                Status<span className="text-red-500">*</span>
              </Label>
              <select
                id="status"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                required
                className="bg-[#fffdf6] border border-[#f2f1ed] rounded-md px-3 py-2 font-mono text-sm focus:outline-none"
              >
                <option value="">Select status</option>
                <option value="Applied">Applied</option>
                <option value="Interview">Interview</option>
                <option value="Rejected">Rejected</option>
              </select>
            </div>
          </div>
          <DialogClose asChild>
            <Button type="submit" className="mt-4" variant={"blue"}>
              {loading ? (
                <Loader2Icon className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                "Save"
              )}
            </Button>
          </DialogClose>
        </form>
      </DialogContent>
    </Dialog>
  );
}
