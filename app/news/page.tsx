import fetchHelper from "../helpers/fetchStories";
import adsHelper from "../helpers/fetchAds";
import shuffle from "../helpers/randomize";
import styles from "./page.module.css";
import PaginatedScroll from "@components/PaginatedScroll";
import FeatStory from "@/components/featuredStory";

export default async function NewsPage() {
  const [paginated, lastDate] = await fetchHelper.getPaginatedStories("news");
  const feat_ads = await adsHelper.getFeaturedAds(); 
  const page_ads = await adsHelper.getPageAds(); 

  let ads = feat_ads.concat(page_ads)

  ads = shuffle(ads)

  return (
    <main>
      <PaginatedScroll stories={paginated} ads={ads.splice(0, 4)} filter="news" lastDate={lastDate}/>
    </main>
  );
}

export const revalidate = 60;
