import type { MDXComponents } from "mdx/types";
import { Badge } from "./components/ui/badge";
import Image from "next/image";

const components: MDXComponents = {
  ul: (props) => <ul className="list-disc my-2" {...props} />,
  li: (props) => <li className="ml-4" {...props} />,
  ol: (props) => (
    <ol
      className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:h-1.5 before:w-4 before:rounded-full before:bg-zinc-700"
      {...props}
    />
  ),
  a: (props) => (
    <a
      className="underline decoration-gray-500 hover:decoration-gray-100 underline-offset-4"
      {...props}
    />
  ),
  code: (props) => <Badge className="" {...props} />,
  h1: (props) => (
    <h1
      className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl my-4"
      {...props}
    />
  ),
  img: ({ src, alt }) => {
    if (!src) return null;

    return (
      <Image
        src={src}
        alt={alt ?? ""}
        width={800}
        height={400}
        sizes="(max-width: 768px) 100vw, 800px"
        className="my-4"
        loading={"eager"}
      />
    );
  },
  blockquote: (props) => (
    <blockquote
      className="border-l-2 text-sm  pl-4 italic text-zinc-600 dark:text-zinc-400"
      {...props}
    />
  ),
};

export function useMDXComponents(): MDXComponents {
  return components;
}
