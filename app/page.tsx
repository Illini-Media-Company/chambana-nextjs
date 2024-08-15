import Image from "next/image";
import Featured from "@components/featured";
import StoryScroll from "@components/storyScroll";
import client from "./sanity";
import styles from "./page.module.css";
import fetchHelper from "./helpers/fetchStories";
import adsHelper from "./helpers/fetchAds";
import BannerAd from "@components/bannerAd"
import shuffle from "./helpers/randomize"
import rearrangeStories from "./helpers/sortStories"

export default async function Home() {
  const stories = await fetchHelper.getFeaturedStories();
  const ads = await adsHelper.getFeaturedAds(0, 2);
  const banners = await adsHelper.getBannerAds();
  const pAds = await adsHelper.getPageAds();

  const sortedStories = rearrangeStories(stories)

  const pageAds = shuffle(pAds);
  const bannerAds = shuffle(banners);
  // TODO: add some error handling here in case the fetch fails

  const exampleAdName = "ButtFuckers";
  return (
    <main>
      <div className={styles.contentContainer}>
        <Featured stories={sortedStories} featAds={ads} />
        {/* TODO: you may want to put this in its own component? Like <BannerAd />? */}
        <a href={bannerAds[0].href} className={styles.bannerAdContainer}>
          <Image
            src={bannerAds[0].imgUrl}
            alt={`Banner ad for ${exampleAdName}`}
            width="400"
            height="100"
            className={styles.bannerAd}
            loading="lazy"
          />
        </a>
        <StoryScroll storyCount={5} stories={sortedStories.slice(4)} ads={pageAds.slice(0, 2)}/>
        <a href={bannerAds[1].href} className={styles.bannerAdContainer}>
          <Image
            src={bannerAds[1].imgUrl}
            alt={`Banner ad for ${exampleAdName}`}
            width="400"
            height="100"
            className={styles.bannerAd}
            loading="lazy"
          />
        </a>
        <StoryScroll storyCount={5} stories={sortedStories.slice(9)} ads={pageAds.slice(2)}/>
      </div>
    </main>
  );
}
export const revalidate = 60;