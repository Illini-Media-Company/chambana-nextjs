import Banner from "@components/banner";
import client from "../sanity";
import styles from "./page.module.css"

export default async function AboutPage() {
  return (
    <main className={styles.about}>
      {/* TODO: remove inline styles */}
      <div style={{ display: "flex", flexDirection: "column" }}>
        <h1>What We&apos;re About</h1>
        <p>Chambana Eats is the only Champaign-Urbana publication exclusively focused on food and drink. We&apos;re here to give you the behind the scenes of what you eat. </p>

        <p>Who in town is making our food? </p>

        <p>How do they do it? </p>

        <p>And maybe most importantly — what should you eat next? </p>

        <p>In a community surrounded by farms cultivating delicious local produce, the Champaign-Urbana community deserves a publication highlighting the ingredients and food in our
          community and who makes them. </p>

        <p>Chambana Eats also aims to be a place where service industry professionals can get advice from each other, share tips, openings and transitions. Whether you&apos;re a bartender, 
          executive chef or owner, you&apos;re the celebrities of this publication. </p>

        <p>If you&apos;re interested in telling your story, or highlighting something about your work,&nbsp;
          <a href="mailto:chambanaeats@illinimedia.com" className={styles.link}>reach out to us.</a></p>

        <p>We cover the entirety of Champaign-Urbana — not just Campustown — because good eats are all over our community.</p>

        <p>We are powered by the <a href="http://illinimedia.com" className={styles.link}>Illini Media Company</a>, home of award-winning publications&nbsp;
        <a href="http://dailyillini.com" className={styles.link}>The Daily Illini</a>, 
        <a href="http://wpgu.com" className={styles.link}>WPGU</a> and the <a href="http://illioyearbook.com" className={styles.link}>Illio Yearbook</a>. </p>

        <p>Chambana Eats is Illini Media&apos;s first hybrid newsroom, where students both lead and learn alongside professional journalists. They gain experience running a professional 
          newsroom, while receiving mentorship and feedback from industry professionals. </p>
        <p>For more information, or to get involved,&nbsp;
          <a href="mailto:chambanaeats@illinimedia.com" className={styles.link}>reach out to Illini Media Company&apos;s Executive Director Jake Williams.</a></p>
      </div>
    </main>
  );
}


