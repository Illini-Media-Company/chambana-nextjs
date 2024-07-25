import fetchStories from "../helpers/fetchStories";
import fetchAds from "../helpers/fetchAds";
import PaginatedSearch from "@/components/PaginatedSearch";

export default async function SearchPage({
    searchParams,
  }: {
    searchParams: { [key: string]: string | string[] | undefined }
  }) {
    const [stories, published] = await fetchStories.getSearch(searchParams.search);
    const ads = await fetchAds.getPageAds();
    console.log(searchParams.search);
    console.log(stories);
    return(
        <>
        {(!stories || stories.length == 0) &&
            <h1>Sorry, no titles found...</h1>}
        {(stories && stories.length != 0) && 
            <PaginatedSearch stories={stories} search="news" ads={ads} lastDate={published}/>
        }
        </>
    )
  }