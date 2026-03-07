import BlogNav from '@/components/elements/BlogNav'
import React from 'react'
import GitHeadace from '@/components/md/blog/git-headache.mdx'

const page = () => {
  return (
    <main id="main-content" className='my-10'>
      <BlogNav />
      <GitHeadace />
    </main>
  )
}

export default page