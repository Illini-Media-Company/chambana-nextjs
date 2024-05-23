import * as React from "react";
import Image from "next/image";
import styles from "./featured.module.css";
import MainStory from "./mainStory";
import FeatStory from "./featuredStory";
import FeatAd from "./featuredAd";
import BannerAd from "./bannerAd";

interface StoryProps {
  // is this used?
  children: React.ReactNode;
}

export default async function Featured({
  stories,
  featAds,
}: {
  // TODO: this is a bit of a code smell, use a type for the stories and ads! google 'sanity typegen' for an automatic way to do it
  stories: any;
  featAds: any;
}) {
  return (
    <div className={styles.container}>
      <div className={styles.leftContainer}>
        <MainStory
          title={stories[0].title}
          url={stories[0].slug}
          tag={stories[0].tags}
          createdBy={stories[0].publishedBy}
          createdAt={stories[0].publishedAt}
        />
        {stories &&
          stories
            .slice(1, 4)
            .map((story: any) => (
              <FeatStory
                title={story.title}
                url={story.slug}
                tag={story.tags}
                imgUrl={story.imgUrl}
                createdBy={story.publishedBy}
                createdAt={story.publishedAt}
                key={story.slug}
              />
            ))}
      </div>
      {/* TODO: redo this css */}
      <div>
        {featAds &&
          featAds.map((ad: any) => (
            <FeatAd imgUrl={ad.imgUrl} href={ad.href} key={ad.imgUrl} />
          ))}
      </div>
    </div>
  );
}
