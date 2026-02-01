import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const featuredProjectShowcase = [
  {
    title: "Feedo - Get Anonymous Feedbacks",
    slug: "",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit consequatur placeat, at commodi tempora consectetur totam facere              non neque est quae ab qui rerum aperiam asperiores nesciunt cupiditate voluptas quaerat!",
  },
  {
    title: "Gravity - Reimagine Hostel Life",
    slug: "",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam doloremque optio temporibus vero cupiditate! Nulla labore delectus deleniti molestias aliquid commodi numquam itaque quaerat consequatur enim odit quam, vitae nobis?",
  },
  {
    title: "Access - English Access Scholarship Program",
    slug: "",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam doloremque optio temporibus vero cupiditate! Nulla labore delectus deleniti molestias aliquid commod numquam itaque quaerat consequatur enim odit quam, vitae nobis?",
  },
];

const Project = () => {
  return (
    <div className="mb-20">
      <h1 className=" text-3xl font-semibold mb-3">Projects</h1>
      <section className="">
        {featuredProjectShowcase.map((project) => {
          return (
            <div key={project.description} className="mt-3 w-full max-w-2xl">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="h-1 w-3 rounded-lg bg-muted/95 shrink-0" />
                  <h2 className="text-lg font-semibold line-clamp-1 wrap-break-word">
                    {project.title}
                  </h2>
                </div>
                <Link
                  href={project.slug}
                  className="text-muted-foreground text-sm hover:text-gray-100 shrink-0 duration-300 cursor-pointer"
                >
                  Read more <span className="">&rarr;</span>
                </Link>
              </div>
              <blockquote className="mt-2 ml-4 border-l-2 border-muted pl-6 italic">
                <p className="line-clamp-3 leading-relaxed">
                  {project.description}
                </p>
              </blockquote>
            </div>
          );
        })}
      </section>
      <a className="w-full mx-auto flex justify-center items-center mt-4 cursor-pointer">
        <Button className="px-3! py-2 underline underline-offset-4" variant={'ghost'} >Explore<MoveRight /></Button>
      </a>
    </div>
  );
};

export default Project;
