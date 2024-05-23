import Banner from "@components/banner";
import fetchStories from "../helpers/fetchStories";

export default async function EventsPage() {
  const data = await fetchStories("events");
  console.log(data);
  return (
    <main>
      {/* TODO: remove inline styles */}
      <div
        style={{ display: "flex", flexDirection: "column", gap: "1em" }}
      ></div>
    </main>
  );
}
