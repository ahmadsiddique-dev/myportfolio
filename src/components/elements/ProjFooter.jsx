'use client'
import React from 'react'
import { useRouter } from "next/navigation";

const ProjFooter = () => {
  const router = useRouter();
  return (
    <div className="text-muted-foreground my-10 cursor-pointer hover:text-gray-100 duration-200 ">
        <div className="flex justify-start items-center gap-0.5" onClick={() => router.push("/")}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon mt-0.5 icon-tabler icons-tabler-outline icon-tabler-arrow-narrow-left"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M5 12l14 0" />
            <path d="M5 12l4 4" />
            <path d="M5 12l4 -4" />
          </svg>{" "}
          <span>Go Home</span>
        </div>
      </div>
  )
}

export default ProjFooter
