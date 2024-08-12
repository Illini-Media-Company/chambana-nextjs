import * as React from "react";
import Image from "next/image";
import styles from "./featured.module.css";
import MainStory from "./mainStory";
import FeatStory from "./featuredStory";
import FeatAd from "./featuredAd";
import BannerAd from "./bannerAd";
import Newsletter from "./newsletter";
import EmblaCarousel from "./EmblaCarousel";
import { EmblaOptionsType } from 'embla-carousel';
import { Ad, Story } from "@/sanity.types";
import Story from "./story";

export default function Featured({
  stories,
  featAds,
}: {
  // TODO: this is a bit of a code smell, use a type for the stories and ads! google 'sanity typegen' for an automatic way to do it
  stories: Story[];
  featAds: Ad[];
}) {
  const OPTIONS: EmblaOptionsType = { loop: true }
  return (
    <div className={styles.container}>
      <div className={styles.leftContainer}>
        {stories[0].title && stories[0].slug && stories[0].tags && stories[0].publishedAt &&
          <MainStory
          title={stories[0].title}
          imgUrl={stories[0].imgUrl}
          url={stories[0].slug}
          tag={stories[0].tags}
          createdBy={stories[0].publishedBy}
          createdAt={stories[0].publishedAt}
        />}
        {stories &&
          stories
            .slice(1, 4)
            .map((story: Story) => (
              story.title && story.slug && story.tags && story.publishedAt &&
              <FeatStory
                title={story.title}
                url={story.slug}
                tag={story.tags}
                imgUrl={story.imgUrl}
                createdBy={story.publishedBy}
                createdAt={story.publishedAt}
                key={story._id}
              />
            ))}
      </div>
      {/* TODO: redo this css */}
      <div className={styles.rightContainer}>
        <Newsletter recaptchaKey={process.env.GOOGLE_RECAPTCHA_KEY}/>
        <div className={styles.carousel}>
          <EmblaCarousel ad={true} slides={featAds} options={OPTIONS}/>
        </div>

        <div className={styles.ads}>
          {(featAds) &&
            featAds.map((ad: Ad) => (
            ad.imgUrl && ad.href &&
              <FeatAd imgUrl={ad.imgUrl} href={ad.href} key={ad._id} />
          ))}
        </div>
      </div>
    </div>
  );
}
