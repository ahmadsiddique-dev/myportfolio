import { myFont } from "@/app/layout";
import Image from "next/image";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { Bot } from "lucide-react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "../ui/button";

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
            <TooltipContent side={"top"}>
              <p>Projects</p>
            </TooltipContent>
          </Tooltip>
        </a>
        <div className=" hover:bg-black/70 rounded-full py-1.5 px-1.5 inline-flex">
          <Drawer direction="right">
            <DrawerTrigger>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Bot />
                </TooltipTrigger>
                <TooltipContent side={"top"}>
                  <p>Ask AI</p>
                </TooltipContent>
              </Tooltip>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
              <DrawerTitle>Move Goal</DrawerTitle>
              <DrawerDescription>
                Set your daily activity goal.
              </DrawerDescription>
            </DrawerHeader>
            <div className="no-scrollbar overflow-y-auto px-4">
              {Array.from({ length: 10 }).map((_, index) => (
                <p
                  key={index}
                  className="style-lyra:mb-2 style-lyra:leading-relaxed mb-4 leading-normal"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              ))}
            </div>
            <DrawerFooter>
              <Button>Submit</Button>
              <DrawerClose asChild>
                <Button variant="outline">Cancel</Button>
              </DrawerClose>
            </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
