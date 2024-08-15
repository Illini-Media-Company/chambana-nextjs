import Banner from "@components/banner";
import client from "../sanity";

export default async function AboutPage() {
  return (
    <main>
      {/* TODO: remove inline styles */}
      <div style={{ display: "flex", flexDirection: "column", gap: "1em" }}>
        <h1>About Page</h1>
        <h2>Welcome to [Your Publication Name]</h2>
        <p>At [Your Publication Name], we’re passionate about food, community, and the stories that bring them together. We believe that food is more than just sustenance; it’s a reflection of our culture, our history, and the vibrant diversity that makes our local community unique.</p>

        <h2>Our Mission</h2>
        <p>Our mission is to serve as the definitive guide to the local food scene, celebrating the chefs, farmers, artisans, and food lovers who make our area so special. We strive to provide our readers with engaging, in-depth coverage of the latest food trends, restaurant openings, local markets, and culinary events, all while highlighting the stories behind the food.</p>

        <h2>What We Cover</h2>
        <p>From farm-to-table movements to hidden gem eateries, our content spans a wide range of topics that resonate with both food enthusiasts and casual diners alike. We feature:</p>
        <ul>
            <li><strong>Restaurant Reviews:</strong> Honest, insightful reviews of local dining spots, from cozy cafes to fine dining establishments.</li>
            <li><strong>Chef Spotlights:</strong> Profiles on the talented chefs and culinary teams driving the local food scene.</li>
            <li><strong>Food Trends:</strong> Exploration of the latest food trends, both locally and beyond, that are influencing what we eat and how we dine.</li>
            <li><strong>Farmers & Artisans:</strong> Stories about the local farmers, bakers, brewers, and artisans who bring fresh, sustainable, and innovative products to our tables.</li>
            <li><strong>Events & Festivals:</strong> Coverage of food festivals, tasting events, pop-ups, and other culinary happenings that make our community vibrant.</li>
            <li><strong>Recipes & Tips:</strong> Delicious, easy-to-follow recipes that celebrate local ingredients, along with cooking tips and tricks from the pros.</li>
        </ul>

        <h2>Our Team</h2>
        <p>We are a team of dedicated food writers, photographers, and culinary enthusiasts who share a deep love for our local food culture. Our diverse backgrounds and experiences allow us to approach stories from multiple angles, offering our readers fresh perspectives and a true taste of our community.</p>

        <h2>Why We Do It</h2>
        <p>We believe that food has the power to bring people together. By sharing the stories of those who create, serve, and enjoy local cuisine, we hope to foster a deeper connection within our community and inspire our readers to explore and appreciate the food landscape around them.</p>

        <h2>Join Us on Our Journey</h2>
        <p>Whether you’re a foodie, a home cook, or simply someone who loves to eat, [Your Publication Name] is your go-to source for all things food in [Your City/Area]. We invite you to join us on this delicious journey as we explore the flavors, stories, and people that make our local food scene so special.</p>
        <p>Stay connected by subscribing to our newsletter, following us on social media, and sharing your own food stories with us. Together, let’s celebrate the vibrant, diverse, and ever-evolving culinary landscape that we’re so proud to call home.</p>

      </div>
    </main>
  );
}
