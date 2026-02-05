"use client";
import { ArrowBigLeft, ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const MainProjectPage = () => {
  return (
    <section className="max-w-2xl px-2.5 mx-auto">
      <div>
        <Link href={'/projects'} className="flex text-sm gap-2.5 hover:text-gray-200 transition-all duration-200 justify-start py-6 mb-3.5 items-center text-muted-foreground">
          <ArrowLeft className=" " size={18}/> <p>Back to Projects</p>
        </Link>
      </div>
      <div>
        <p className="text-muted-foreground pb-7 text-sm font-medium">Tuesday, 12th December 2023</p>
      </div>
      
      <h1 className="text-3xl font-semibold">
        Feedo - Dive into the world of Anonimity
      </h1>
      <blockquote className="mt-10 border-l-2 pl-6 italic">
        &quot;After all,&quot; he said, &quot;everyone enjoys a good joke, so
        it&apos;s only fair that they should pay for the privilege.&quot;
      </blockquote>
      <div className="max-w-full h-[20vh] md:h-[40vh] mt-10 mask-b-from-95% mask-t-from-95% w-2xl max-h-[40vh] relative">
        <Image src={"/feedo.png"} fill={true} alt="Feedo Project" />
      </div>
      <div>
        <h2 className="text-2xl font-semibold mt-10 mb-4">Technologies</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>TypeScript</li>
          <li>Next.js</li>
          <li>React</li>
          <li>Tailwind CSS</li>
          <li>Node.js</li>
          <li>Resense</li>
          <li>React-hook-form</li>
        </ul>
      </div>
      <div>
        <h2 className="text-2xl font-semibold mt-10 mb-4">Overview</h2>
        <div>
          <p>
            Feedo is an anonymous feedback platform designed to facilitate honest
          communication within teams and organizations. It allows users to send
          and receive feedback without revealing their identities, promoting a
          culture of openness and continuous improvement and specifications.
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Anonymous feedback submission</li>
            <li>Secure and private communication</li>
            <li>Team collaboration enhancement</li>
          </ul>
          <p>
            Now, with Feedo, teams can foster a more transparent and
          communicative environment, leading to better performance and growth.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MainProjectPage;
