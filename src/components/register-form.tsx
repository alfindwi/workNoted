import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2Icon } from "lucide-react";
import { PasswordInput } from "./ui/password-input";

export function RegisterForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="bg-[#f4fafa] text-black font-mono border border-black rounderd-lg shadow-[8px_8px_0px_#222222]">
        <CardHeader>
          <CardTitle className="text-black text-xl font-bold">
            Register
          </CardTitle>
          <CardDescription className="text-neutral-400">
            Create an account to get started
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
              <div className="grid gap-3">
                <Label htmlFor="email">
                  Email<span className="text-red-500">*</span>
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>
              <div className="grid gap-3">
                <div className="flex items-center">
                  <Label htmlFor="password">
                    Password<span className="text-red-500">*</span>
                  </Label>
                </div>
                <PasswordInput id="password" placeholder="•••••" required />
              </div>
              <div className="grid gap-3">
                <div className="flex items-center">
                  <Label htmlFor="username">
                    Username<span className="text-red-500">*</span>
                  </Label>
                </div>
                <Input
                  id="username"
                  type="text"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div className="flex flex-col gap-3">
                <Button type="submit" variant={"blue"}>
                  {/* <Loader2Icon className="mr-2 h-4 w-4 animate-spin" /> */}
                  Register
                </Button>
              </div>
            </div>
            <div className="mt-4 text-center text-sm">
              already have an account?{" "}
              <a href="/login" className="underline underline-offset-4">
                Sign in
              </a>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
