import Image from "next/image";
import Featured from "@components/featured";
import StoryScroll from "@components/storyScroll";
import client from "./sanity";
import styles from "./page.module.css";
import getFeaturedStories from "./helpers/fetchStories";
import getFeaturedAds from "./helpers/fetchAds"

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
export const revalidate = 60