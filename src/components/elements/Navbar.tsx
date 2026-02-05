"use client";

import { useChat } from "@ai-sdk/react";
import { useEffect, useState } from "react";
import { useRef } from "react";
import Image from "next/image";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { ArrowUp, Bot, Settings, X } from "lucide-react";
import Markdown from "react-markdown";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "../ui/button";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  InputGroupTextarea,
} from "../ui/input-group";
import { Card } from "../ui/card";
import { Skeleton } from "../ui/skeleton";
import Link from "next/link";

const AssistantSkeleton = () => (
  <Card className="max-w-[85%] px-2 my-2.5 py-2 space-y-2">
    <Skeleton className="h-3 w-[80%]" />
    <Skeleton className="h-3 w-[65%]" />
    <Skeleton className="h-3 w-[40%]" />
  </Card>
);

const Navbar = () => {
  const [input, setInput] = useState("");
  const { messages, sendMessage, status } = useChat();
  const isLoading = status === "submitted" || status === "streaming";
  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    scrollToBottom("auto");
  }, [messages, status]);

  const handleSubmit = () => {
    if (!input.trim() || isLoading) return;
    sendMessage({ text: input });
    setInput("");
  };

  const scrollToBottom = (behavior: ScrollBehavior = "smooth") => {
    requestAnimationFrame(() => {
      bottomRef.current?.scrollIntoView({ behavior });
    });
  };

  return (
    <header className="flex mt-5 justify-between pb-6 pt-5 px-5 sm:px-12 md:px-2 max-w-2xl mx-auto mb-2 items-center">
      <span className="text-md md:text-lg whitespace-nowrap font-bold">
        <a
          className="
            p-2 rounded-2xl -ml-2 
            transition-all duration-500       
            hover:text-shadow-lg hover:text-shadow-gray-700
          "
          href=""
        >
          Ahmad Siddique
        </a>
      </span>

      <nav className="flex text-sm gap-2">
        <Link
          className="hover:bg-black/70 rounded-full py-1.5 px-1.5 inline-flex"
          href="/project"
        >
          <Tooltip>
            <TooltipTrigger asChild>
                <Settings
                  className="transition-transform duration-300 hover:rotate-45"
                  width={20}
                  height={20}
                />
            </TooltipTrigger>
            <TooltipContent side="top">
              <p>Projects</p>
            </TooltipContent>
          </Tooltip>
        </Link>

        <div className="hover:bg-black/70 rounded-full py-1.5 px-1.5 inline-flex">
          <Drawer direction="right">
            <DrawerTrigger asChild>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Bot />
                </TooltipTrigger>
                <TooltipContent side="top">
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
                {messages.map((message) => (
                  <div key={message.id} className="whitespace-pre-wrap">
                    {message.role === "user" ? (
                      message.parts.map((part, i) =>
                        part.type === "text" ? (
                          <div
                            key={`${message.id}-${i}`}
                            className="text-sm px-2.5 max-w-[85%] py-2.5 bg-muted/45 rounded-sm m-1.5"
                          >
                            {part.text}
                          </div>
                        ) : null,
                      )
                    ) : (
                      <Card className="max-w-[85%] py-4 text-start overflow-hidden text-wrap px-4 my-2.5">
                        <Markdown>
                          {message.parts
                            .filter((p) => p.type === "text")
                            .map((p) => p.text)
                            .join("")}
                        </Markdown>
                      </Card>
                    )}
                  </div>
                ))}

                {isLoading && <AssistantSkeleton />}
              </div>
              <div ref={bottomRef} />
              <DrawerFooter>
                <InputGroup>
                  <InputGroupTextarea
                    maxLength={280}
                    id="block-end-textarea"
                    placeholder={
                      isLoading ? "Thinking..." : "Write a comment..."
                    }
                    className="max-h-25 no-scrollbar disabled:opacity-60"
                    value={input}
                    disabled={isLoading}
                    onChange={(e) => setInput(e.currentTarget.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && !e.shiftKey) {
                        e.preventDefault();
                        handleSubmit();
                      }
                    }}
                  />

                  <InputGroupAddon align="block-end">
                    <InputGroupText>{input.length}/280</InputGroupText>
                    <Button
                      onClick={handleSubmit}
                      disabled={isLoading || !input.trim()}
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
