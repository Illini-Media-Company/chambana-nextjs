import Banner from "@components/banner";
import client from "../sanity";

export default async function AboutPage() {
  return (
    <main>
      {/* TODO: remove inline styles */}
      <div style={{ display: "flex", flexDirection: "column", gap: "1em" }}>
        <h1>About Page</h1>
      </div>
    </main>
  );
}
