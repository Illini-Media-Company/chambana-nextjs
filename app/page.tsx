import Featured from "@components/featured";
import StoryScroll from "@components/storyScroll";
import styles from "./page.module.css";
import fetchHelper from "./helpers/fetchStories";
import Script from "next/script";

export const runtime = 'edge';

export default async function Home() {
  const stories = await fetchHelper.getHomepageStories();
  // TODO: add some error handling here in case the fetch fails

  return (
    <main>
      <div className={styles.contentContainer}>
        <Featured stories={stories} />
        {/* TODO: you may want to put this i n its own component? Like <BannerAd />? */}
        <div className={styles.bannerRow}>
          <div className={styles.bannerLeft}>
            <ins
              className={styles.bannerAdContainer}
              data-type="broadstreet"
              data-zone-id="174931"
              data-click-url-empty="">
              <Script src="https://cdn.broadstreetads.com/init-2.min.js" async></Script>
            </ins>
          </div>
          <div className={styles.bannerRight} aria-hidden="true" />
        </div>
        <StoryScroll storyCount={5} stories={stories.slice(4)} />
        <div className={styles.bannerRow}>
          <div className={styles.bannerLeft}>
            <ins
              className={styles.bannerAdContainer}
              data-type="broadstreet"
              data-zone-id="174931"
              data-click-url-empty="">
              <Script src="https://cdn.broadstreetads.com/init-2.min.js" async></Script>
            </ins>
          </div>
          <div className={styles.bannerRight} aria-hidden="true" />
        </div>
        <StoryScroll storyCount={5} stories={stories.slice(9)} />
        {/* <a href="/news" className={styles.loadMore}><button>Load More Stories</button></a> */}
      </div>
    </main>
  );
}
export const revalidate = 60;
