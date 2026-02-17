import Link from "next/link";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { Settings } from "lucide-react";
import { AIChatDrawer } from "@/components/ui/AIChatDrawer";

const Navbar = () => {
  return (
    <header className="flex mt-5 justify-between pb-6 pt-5 px-5 sm:px-12 md:px-2 max-w-2xl mx-auto mb-2 items-center">
      <span className="text-md md:text-lg whitespace-nowrap font-bold">
        <Link
          className="p-2 rounded-2xl -ml-2 transition-all duration-500 hover:text-shadow-lg hover:text-shadow-gray-700"
          href="/"
        >
          Ahmad Siddique
        </Link>
      </span>

      <nav className="flex text-sm gap-1">
        <Link
          className="hover:bg-black/70 rounded-full p-3 inline-flex"
          href="/project"
        >
          <Tooltip>
            <TooltipTrigger asChild>
              <button className="flex items-center justify-center">
                <Settings className="transition-transform duration-300 hover:rotate-45" width={20} height={20} />
                <span className="sr-only">See Projects</span>
              </button>
            </TooltipTrigger>
            <TooltipContent side="top">
              <p>Projects</p>
            </TooltipContent>
          </Tooltip>
        </Link>
        <AIChatDrawer />
      </nav>
    </header>
  );
};

export default Navbar;
