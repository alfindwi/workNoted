import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Github, Instagram, Linkedin } from "lucide-react";

export function Profile() {
  return (
    <div
      className="py-5 flex items-center mt-5 px-4 max-w-xl shadow-[8px_8px_0px_#222222] 
  rounded-md mx-auto border border-black bg-[#ffbdc4] hover:shadow-[6px_6px_0px_#222222] transition"
    >
      <div className="max-w-xl flex px-5">
        <Avatar className="rounded-full size-30 cursor-pointer">
          <AvatarImage
            src="https://i.pinimg.com/736x/a0/a0/78/a0a078aecbf6e730de3a67ecee49b584.jpg"
            alt="User"
          />
          <AvatarFallback>UN</AvatarFallback>
        </Avatar>

        <div className="ml-4 flex flex-col justify-center">
          <p className="font-semibold text-lg font-mono">alfin dwi</p>
          <p className="text-sm text-gray-700 font-mono">
            alfindwi190@gmail.com
          </p>

          <div className="mt-5 flex-row flex gap-5">
            <a href="https://www.instagram.com/alvindvvi/" target="_blank">
              <Instagram />
            </a>
            <a href="https://www.linkedin.com/in/alfin-dwi-wadani/" target="_blank">
              <Linkedin className="w-6 h-6"  />
            </a>
            <a href="https://github.com/alfindwi" target="_blank">
              <Github className="w-6 h-6"  />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
