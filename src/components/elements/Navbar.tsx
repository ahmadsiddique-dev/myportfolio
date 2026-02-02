import { myFont } from "@/app/layout";
import Image from "next/image";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

const Navbar = () => {
  return (
    <header className="flex mt-2.5 justify-between p-7 max-w-2xl mx-auto mb-2 items-center">
      <span className="text-md md:text-lg whitespace-nowrap font-bold">
        <a
          className={`
            ${myFont.className} 
            p-2 rounded-2xl -ml-2 
            transition-all duration-500       
            hover:text-shadow-lg hover:text-shadow-gray-700 
        `}
          href=""
        >
          Ahmad Siddique
        </a>
      </span>
      <nav className="flex text-sm gap-2">
        <a
          className=" hover:bg-black/70 rounded-full py-1.5 px-1.5 inline-flex"
          href=""
        >
          <Tooltip>
            <TooltipTrigger asChild>
              <Image
                className="transition-transform duration-300 hover:rotate-45"
                src={"/settings.svg"}
                alt="project-icon"
                width={20}
                height={20}
              />
            </TooltipTrigger>
            <TooltipContent side={'top'}>
              <p>Projects</p>
            </TooltipContent>
          </Tooltip>
        </a>
        <a
          className=" hover:bg-black/70 rounded-full py-1.5 px-1.5 inline-flex"
          href=""
        >
          <Tooltip>
            <TooltipTrigger asChild>
              <Image
                className="hover:"
                src={"/settings.svg"}
                alt="project-icon"
                width={20}
                height={20}
              />
            </TooltipTrigger>
            <TooltipContent side={'top'}>
              <p>Ask AI</p>
            </TooltipContent>
          </Tooltip>
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
