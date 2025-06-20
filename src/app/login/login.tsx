import { LoginForm } from "@/components/login-form";

export function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FFFDF6] px-4">
      <LoginForm className="w-full max-w-md sm:max-w-md md:max-w-lg" />
    </div>
  );
}
