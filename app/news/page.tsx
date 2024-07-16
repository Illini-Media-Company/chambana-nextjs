import Banner from "@components/banner";
import StoryScroll from "@components/storyScroll";
import fetchHelper from "../helpers/fetchStories";
import adsHelper from "../helpers/fetchAds";
import shuffle from "../helpers/randomize";
import styles from "./page.module.css";
import PaginatedScroll from "@components/PaginatedScroll";

export default async function NewsPage() {
  const data = await fetchHelper.getFeaturedStories("news");
  const [paginated, lastDate] = await fetchHelper.getPaginatedStories("news");
  const feat_ads = await adsHelper.getFeaturedAds(); 
  const page_ads = await adsHelper.getPageAds(); 
  const scrolls = data.length / 5;

  let ads = feat_ads.concat(page_ads)

  const rows = data.reduce(function (rows: any, key: any, index: any) { 
    return ((index % 4 == 0) ? rows.push([key]) 
      : rows[rows.length-1].push(key)) && rows;
  }, []);

  ads = shuffle(ads)
  console.log('stories', data.lastId)

  return (
    <main>
      <div className={styles.mobile}>
        {rows && 
          rows.map((row: any, index: number) => {
            return <StoryScroll stories={row} ads={[ads[index % ads.length]]} adslides={false}/>
          })}
      </div>
      <div className={styles.pc}>
        {/* <StoryScroll stories={data} ads={ads.splice(0, 4)} /> */}
        <PaginatedScroll stories={paginated} ads={ads.splice(0, 4)} filter="news" lastDate={lastDate}/>
      </div>
    </main>
  );
}

export const revalidate = 60;
