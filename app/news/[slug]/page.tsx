import client from "../../sanity"
import React from 'react'
import Post from "@components/post"
import fetchHelper from "../../helpers/fetchStories"
import fetchAds from "../../helpers/fetchAds"
import shuffle from "../../helpers/randomize"
import { redirect } from "next/navigation"
import { Story } from "@/sanity.types"
import { Metadata, ResolvingMetadata } from "next"

export const runtime = 'experimental edge';

type Props = {
  params: {
    slug: string
  }
}

function throwError(message: string): never  {
  throw new Error(message);
}

export async function generateStaticParams() {
  const posts = await client.fetch(`*[_type == "story"]`).catch((err) => console.log('error', err));
  return posts.map((post: Story) => {
      slug: post.slug
  })
}

export async function generateMetadata(
  {params: {slug}}: Props,
  parent: ResolvingMetadata
): Promise<Metadata> { 
  const story: Story[] = await fetchHelper.getStoryBySlug(slug);
  console.log(story);

  const u = process.env.NEXT_PUBLIC_IMAGE_ENDPOINT ?? throwError('no image endpoing');
  const replacement = '.';
  return {
    openGraph: {
      title: story[0].title,
      images: (story[0].poster && story[0].poster.asset && story[0].poster.asset._ref) ? u + story[0].poster?.asset?._ref.slice(6).replace(/-([^-]*)$/, replacement + '$1'): '/placeholder.webp',
      description: story[0].description ? story[0].description : " "
    },
  }
}

async function Page({params: {slug}}: Props) {
  const story: Story[] = await fetchHelper.getStoryBySlug(slug)
  const pre_ad = await fetchAds.getPageAds();
  const ads = shuffle(pre_ad)
  if (story.length === 0) {
    redirect('/[not_found]')
  }
  return(
    <div>
      <Post story={story[0]} ads={ads}/>
    </div>
  )
}

export default Page;

export const revalidate = 120;