import { RegisterForm } from "@/components/register-form";

export function Register() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FFFDF6] px-4">
      <RegisterForm className="w-full max-w-md sm:max-w-md md:max-w-lg" />
    </div>
  );
}