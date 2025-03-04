import fetchHelper from "../helpers/fetchStories";
import adsHelper from "../helpers/fetchAds";
import shuffle from "../helpers/randomize";
import styles from "./page.module.css";
import PaginatedScroll from "@components/PaginatedScroll";

export const runtime = 'experimental edge';

export default async function EventsPage() {
  const [paginated, lastDate] = await fetchHelper.getPaginatedStories("events");
  const feat_ads = await adsHelper.getFeaturedAds(); 
  const page_ads = await adsHelper.getPageAds(); 

  let ads = feat_ads.concat(page_ads)

  ads = shuffle(ads)

  return (
    <main>
      <PaginatedScroll stories={paginated} ads={ads.splice(0, 4)} filter="events" lastDate={lastDate}/>
    </main>
  );
}

// export const revalidate = 60;

