import BlogNav from '@/components/elements/BlogNav'
import React from 'react'
import GitHeadace from '@/components/md/blog/git-headache.mdx'
import BlogFooter from '@/components/elements/BlogFooter'

const page = () => {
  return (
    <main id="main-content" className='my-10'>
      <BlogNav />
      <GitHeadace />
      <BlogFooter />
    </main>
  )
}

export default page