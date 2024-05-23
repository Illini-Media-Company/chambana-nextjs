import Image from "next/image";
import Banner from "@components/banner"
import Featured from "@components/featured"
import StoryScroll from "@components/story_scroll"
import client from "./sanity"
import BannerAd from "@components/bannerAd"

export default async function Home() {
  const stories = await getFeaturedStories();
  const ads = await getFeaturedAds();
  console.log(stories)
  return (
    <main>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1em' }}>
      <Banner />
      <Featured stories={stories} featAds={ads}/>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {/* This is the banner ad spot for the page */}
        <Image 
          src={"/banner-placeholder.png"}
          alt={"banner ad"}
          width="0"
          height="0"
          style={{
            width: '80%',
            height: '200px',
            marginBottom: '20px',
            marginTop: '20px'
          }}
        /> 
      </div>
      <StoryScroll storyCount={10} stories={stories.slice(4)}/>
    </div>
  </main>
  );
}

async function getFeaturedStories() {
  const revalidate = 60
  const data = await client.fetch(`*[_type == 'story'] | order(_createdAt desc) {
    title,
    publishedBy,
    publishedAt,
    tags,
    "slug" : slug.current,
    "imgUrl" : poster.asset->url
  }`, {revalidate: {revalidate}});
  // console.log(data)
  return data;
}
async function getFeaturedAds() {
  const revalidate = 60
  const data = await client.fetch(`*[_type == 'ad'][0..1] {
    "imgUrl": ad.asset->url,
    href
  }`, {revalidate: {revalidate}});
  return data;
}

export const revalidate = 60;