import Banner from "@components/banner";
import fetchHelper from "../helpers/fetchStories";

export default async function EventsPage() {
  const data = await fetchHelper.getFeaturedStories("events");
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
