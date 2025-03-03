import client from "../../sanity"
import React from 'react'
import Post from "@components/post"
import fetchHelper from "../../helpers/fetchStories"
import fetchAds from "../../helpers/fetchAds"
import shuffle from "../../helpers/randomize"
import { Story } from "@/sanity.types"

type Props = {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
    const posts = await client.fetch(`*[_type == "story"]`).catch((err) => console.log('error', err));
    return posts.map((post: Story) => {
        slug: post.slug
    })
}

export default async function Page({params: {slug}}: Props) {
  console.log('slug', slug);
  const story = await fetchHelper.getStoryBySlug(slug)
  const pre_ad = await fetchAds.getPageAds();
  const ads = shuffle(pre_ad)
  return(
    <div>
      <Post story={story[0]} ads={ads}/>
    </div>
  )
}

