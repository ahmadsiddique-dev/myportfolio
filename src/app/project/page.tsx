import { projects } from '@/data/projects.json'
import Link from 'next/link'
import ProjFooter from "@/components/elements/ProjFooter";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore projects built by Ahmad Siddique — including Feedo (anonymous feedback), Gravity (hostel management), and Access (English Access Scholarship Program).",
  openGraph: {
    title: "Projects — Ahmad Siddique",
    description:
      "Explore projects built by Ahmad Siddique — Feedo, Gravity, Access, and more.",
  },
};

export default function ProjectsPage() {
  return (
    <main>
      <ProjFooter />
      <h1 className='pb-7 text-3xl font-bold'>My Projects</h1>
      <div>
        <ul className='list-disc pl-5 space-y-2'>
          {projects.map((project) => (
            <li key={project.id} className='hover:bg-muted px-2.5 py-1.5'>
              <Link href={project.slug}>{project.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  )
}
