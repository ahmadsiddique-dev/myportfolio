import React from 'react'
import Post from '@/components/md/First.mdx'

const page = () => {
  return (
    <article className='max-w-2xl prose-code:before:content-none prose-code:after:content-none px-2.5 mx-auto prose prose-neutral dark:prose-invert'>
        <Post />
    </article>
  )
}

export default page
