import { myFont } from "@/app/layout";
import Image from "next/image";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { ArrowUp, ArrowUpRight, Bot, X } from "lucide-react";
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
import { Textarea } from "../ui/textarea";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
} from "../ui/input-group";

const Navbar = () => {
  return (
    <header className="flex mt-2.5 justify-between pb-6 pt-5 px-5 sm:px-12 md:px-2 max-w-2xl mx-auto mb-2 items-center">
      <span className="text-md md:text-lg whitespace-nowrap font-bold">
        <a
          className={`
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
            <DrawerContent className="h-dvh max-h-dvh">
              <DrawerHeader className="flex border-b flex-row justify-between">
                <DrawerTitle>Have some Questions?</DrawerTitle>
                <DrawerClose asChild>
                  <Button variant="default">
                    <X />
                  </Button>
                </DrawerClose>
              </DrawerHeader>
              <div className="no-scrollbar overflow-y-auto px-4">
                {Array.from({ length: 10 }).map((_, index) => (
                  <p
                    key={index}
                    className="style-lyra:mb-2 style-lyra:leading-relaxed mb-4 leading-normal"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                ))}
              </div>
              <DrawerFooter>
                <InputGroup>
                  <InputGroupTextarea
                    id="block-end-textarea"
                    placeholder="Write a comment..."
                    className="max-h-25 no-scrollbar"
                  />
                  <InputGroupAddon align={"block-end"}>
                    <InputGroupText>0/280</InputGroupText>
                    <Button 
                      variant="default"
                      className="ml-auto rounded-lg py-1.5 px-1.5!"
                    >
                      <ArrowUp /> 
                  </Button>
                  </InputGroupAddon>
                </InputGroup>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
