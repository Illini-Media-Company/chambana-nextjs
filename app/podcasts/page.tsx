import fetchHelper from "../helpers/fetchStories";
import adsHelper from "../helpers/fetchAds";
import shuffle from "../helpers/randomize";
import styles from "./page.module.css";
import Podcast from "@/components/embeddedPodcast";
import FeaturedPodcasts from "@/components/featuredPodcasts";
import PaginatedScroll from "@/components/PaginatedScroll";
import parser from "../helpers/parseFeed";

export default async function PodcastsPage() {
  const [paginated, lastDate] = await fetchHelper.getPaginatedStories("podcasts");
  const feat_ads = await adsHelper.getFeaturedAds(); 
  const page_ads = await adsHelper.getPageAds();
  const parsed = await parser();
  
  console.log('parse', parsed);

  let ads = feat_ads.concat(page_ads)

  ads = shuffle(ads)

  return (
    <main>
      {
        (parsed.enclosure && parsed.enclosure.url) &&
          <Podcast url={parsed.enclosure.url} description={parsed.contentSnippet} />
      }
      <FeaturedPodcasts />
      <PaginatedScroll stories={paginated} ads={ads.splice(0, 4)} filter="podcasts" lastDate={lastDate}/>
    </main>
  );
}

export const revalidate = 60;
