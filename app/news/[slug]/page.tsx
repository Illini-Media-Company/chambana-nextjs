import client from "../../sanity"
import React from 'react'
import Post from "@components/post"
import fetchHelper from "../../helpers/fetchStories"

type Props = {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
    const posts = await client.fetch(`*[_type == "story"]`)
    return posts.map((post: any) => {
        slug: post.slug
    })
}

async function Page({params: {slug}}: Props) {
  // const story = await client.fetch(`*[_type == "story" && slug.current=='${slug}']{
  //   title,
  //   body,
  //   publishedBy,
  //   publishedAt,
  //   "imageUrl": poster.asset->url
  // }` , {}, {next: {revalidate: 60}})
  const story = await fetchHelper.getStoryBySlug(slug)
  return(
    <div>
      <Post story={story[0]}/>
    </div>
  )
}

export default Page