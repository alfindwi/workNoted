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
import { cn } from "@/lib/utils";
import { PasswordInput } from "./ui/password-input";

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="bg-[#f2f7f5] text-black font-mono border border-black rounderd-lg shadow-[8px_8px_0px_#222222]">
        <CardHeader>
          <CardTitle className="text-black text-xl">Login</CardTitle>
          <CardDescription className="text-neutral-400">
            Enter your email below to login to your account
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
              <div className="flex flex-col gap-3">
                <Button type="submit" variant={"blue"}>
                  Login
                </Button>
              </div>
            </div>
            <div className="mt-4 text-center text-sm">
              Don&apos;t have an account?{" "}
              <a href="/register" className="underline underline-offset-4">
                Sign up
              </a>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
