import { projects } from '@/data/projects.json'
import Link from 'next/link'

const page = () => {
  return (
    <main>
      <h1 className='py-7 text-3xl font-bold'>My Projects</h1>
      <div>
        <ul className='list-disc pl-5 space-y-2'>
          {projects.map((project) => (
            <Link key={project.id} href={project.slug}><li className='hover:bg-muted px-2.5 py-1.5 ' >{project.title}</li></Link>
          ))}
        </ul>
      </div>
    </main>
  )
}

export default page
