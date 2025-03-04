import client from "../../sanity"
import React from 'react'
import Post from "@components/post"
import { Story } from "@/sanity.types"

export const runtime = 'experimental-edge';

type Props = {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
    const posts = await client.fetch(`*[_type == "story"]`)
    return posts.map((post: Story) => {
        slug: post.slug
    })
}

export default async function Page({params: {slug}}: Props) {
  const story = await client.fetch(`*[_type == "story" && slug.current=='${slug}']`, {}, {next: {revalidate: 60}})
  // console.log(story)
  return(
    <div>
      <Post story={story[0]}/>
    </div>
  )
}

