import Image from "next/image";
import Featured from "@components/featured";
import StoryScroll from "@components/storyScroll";
import styles from "./page.module.css";
import fetchHelper from "./helpers/fetchStories";
import adsHelper from "./helpers/fetchAds";
import shuffle from "./helpers/randomize"
import rearrangeStories from "./helpers/sortStories"
import Script from "next/script";

export const runtime = 'edge';

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
        {/* TODO: you may want to put this i n its own component? Like <BannerAd />? */}
        <ins
            className={styles.bannerAdContainer}
            data-type="broadstreet"
            data-zone-id="174931"
            data-click-url-empty="">
          <Script src="https://cdn.broadstreetads.com/init-2.min.js" async></Script>
        </ins>
        {/* <StoryScroll storyCount={5} stories={sortedStories.slice(4)} ads={pageAds.slice(0, 2)}/>
        <ins
            className={styles.bannerAdContainer}
            data-type="broadstreet"
            data-zone-id="174931"
            data-click-url-empty="">
          <Script src="https://cdn.broadstreetads.com/init-2.min.js" async></Script>
        </ins>
        <StoryScroll storyCount={5} stories={sortedStories.slice(9)} ads={pageAds.slice(2)}/> */}
      </div>
    </main>
  );
}
export const revalidate = 60;