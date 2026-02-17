import React from 'react'
import Feedo from '@/components/md/Feedo.mdx'
import ProjNav from '@/components/elements/ProjNav'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Feedo — Anonymous Feedback Platform",
  description:
    "A platform to get anonymous feedback from your friends, colleagues, or anyone. Share your feedback link and receive honest opinions without revealing identities.",
  openGraph: {
    title: "Feedo — Anonymous Feedback Platform",
    description:
      "A platform to get anonymous feedback from your friends, colleagues, or anyone. Share your feedback link and receive honest opinions.",
  },
};

const page = () => {
  return (
    <main id="main-content" className='my-10 '>
      <ProjNav />
      <Feedo />
    </main>
  )
}

export default page
