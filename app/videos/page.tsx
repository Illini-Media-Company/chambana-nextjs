import Banner from "@components/banner";
import StoryScroll from "@components/story_scroll";
import client from "../sanity";
import fetchStories from "../helpers/fetchStories";

export default async function VideosPage() {
  const data = await fetchStories("videos");
  console.log(data);
  return (
    <main>
      {/* TODO: remove inline styles */}
      <div style={{ display: "flex", flexDirection: "column", gap: "1em" }}>
        <StoryScroll stories={data} />
      </div>
    </main>
  );
}

export const revalidate = 60;
