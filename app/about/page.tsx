import Banner from "@components/banner";
import StoryScroll from "@components/storyScroll";
import client from "../sanity";

export default async function NewsPage() {
  return (
    <main>
      {/* TODO: remove inline styles */}
      <div style={{ display: "flex", flexDirection: "column", gap: "1em" }}>
        <h1>About Page</h1>
      </div>
    </main>
  );
}
