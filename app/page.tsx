import Image from "next/image";
import Featured from "@components/featured";
import StoryScroll from "@components/storyScroll";
import client from "./sanity";
import styles from "./page.module.css";
import fetchHelper from "./helpers/fetchStories";
import getFeaturedAds from "./helpers/fetchAds";
import BannerAd from "@components/bannerAd"

export default async function Home() {
  const stories = await fetchHelper.getFeaturedStories();
  const ads = await getFeaturedAds();

  // TODO: add some error handling here in case the fetch fails

  const exampleAdName = "ButtFuckers";
  return (
    <main>
      <div className={styles.contentContainer}>
        <Featured stories={stories} featAds={ads} />
        {/* TODO: you may want to put this in its own component? Like <BannerAd />? */}
        <a href="https://dailyillini.com" className={styles.bannerAdContainer}>
          <Image
            src={"/banner-placeholder.png"}
            alt={`Banner ad for ${exampleAdName}`}
            width="400"
            height="100"
            className={styles.bannerAd}
          />
        </a>
        <StoryScroll storyCount={5} stories={stories.slice(4)} />
        <a href="https://dailyillini.com" className={styles.bannerAdContainer}>
          <Image
            src={"/banner-placeholder.png"}
            alt={`Banner ad for ${exampleAdName}`}
            width="400"
            height="100"
            className={styles.bannerAd}
          />
        </a>
        <StoryScroll storyCount={5} stories={stories.slice(9)} />
      </div>
    </main>
  );
}
export const revalidate = 60