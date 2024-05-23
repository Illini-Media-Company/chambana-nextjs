import Image from "next/image";
import Featured from "@components/featured";
import StoryScroll from "@components/storyScroll";
import client from "./sanity";
import styles from "./page.module.css";

export default async function Home() {
  const stories = await getFeaturedStories();
  const ads = await getFeaturedAds();

  // TODO: add some error handling here in case the fetch fails

  const exampleAdName = "ButtFuckers";
  return (
    <main>
      <div className={styles.contentContainer}>
        <Featured stories={stories} featAds={ads} />
        {/* TODO: you may want to put this in its own component? Like <BannerAd />? */}
        <div className={styles.bannerAdContainer}>
          <Image
            src={"/banner-placeholder.png"}
            alt={`Banner ad for ${exampleAdName}`}
            width="0"
            height="0"
            className={styles.bannerAd}
          />
        </div>
        <StoryScroll storyCount={10} stories={stories.slice(4)} />
      </div>
    </main>
  );
}

// TODO: move this to a separate helpers.ts file
async function getFeaturedStories() {
  const revalidate = 60;
  const data = await client.fetch(
    `*[_type == 'story'] | order(_createdAt desc) {
    title,
    publishedBy,
    publishedAt,
    tags,
    "slug" : slug.current,
    "imgUrl" : poster.asset->url
  }`,
    { revalidate: { revalidate } }
  );
  // console.log(data)
  return data;
}

// TODO: move this to a separate helpers.ts file
async function getFeaturedAds() {
  const revalidate = 60; // will you really need to revalidate ads this often?
  const data = await client.fetch(
    `*[_type == 'ad'][0..1] {
    "imgUrl": ad.asset->url,
    href
  }`,
    { revalidate: { revalidate } }
  );
  return data;
}
