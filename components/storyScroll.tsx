'use client'

import Story from "@components/story";
import styles from "./storyScroll.module.css";
import FeatStory from "./featuredStory";
import FeatAd from "./featuredAd"
import Newsletter from "./newsletter"
import EmblaCarousel from "./EmblaCarousel";
import { EmblaOptionsType } from 'embla-carousel';
import { Ad, Story as SanityStory} from "@/sanity.types";

interface StoryScrollProps {
  storyCount?: number;
  stories: Story[];
  ads?: Ad[];
  inverse?: boolean;
  adslides?: boolean;
  sticky?: boolean;
}

export default function StoryScroll({ storyCount, stories, ads, inverse, adslides = true, sticky = false }: StoryScrollProps) {
  const OPTIONS: EmblaOptionsType = { loop: true }
  if (storyCount) {
    return (
      <div className={styles.container}>
        <div className={styles.leftContainer}>
          {stories &&
            stories
              .slice(0, storyCount)
              .map((story: SanityStory) => (
                story.title && story.tags && story.slug && story.publishedAt &&
                <Story
                  title={story.title}
                  tag={story.tags}
                  url={story.slug}
                  imgUrl={story.imgUrl}
                  createdBy={story.publishedBy}
                  createdAt={story.publishedAt}
                />
              ))}
        </div>
        <div className={styles.rightContainer}>
          <div className={styles.ads}>
            {(ads) && 
            ads.map((ad: Ad) => {
              return ad.imgUrl && ad.href && <FeatAd imgUrl={ad.imgUrl} href={ad.href}/>
            })} 
          </div>
          <div className={styles.mobileAds}>
            {ads && adslides && 
              <EmblaCarousel ad={true} slides={ads} options={OPTIONS} />}
            {ads && !adslides && 
              <FeatAd imgUrl={ads[0]} href={ads[0].href}/>}
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className={styles.container}>
        <div className={styles.leftContainer}>
          {stories &&
            stories
              .map((story: SanityStory) => (
                story.title && story.tags && story.slug && story.publishedAt &&
                <Story
                  title={story.title}
                  tag={story.tags}
                  url={story.slug}
                  imgUrl={story.imgUrl}
                  createdBy={story.publishedBy}
                  createdAt={story.publishedAt}
                />
              ))}
        </div>
        <div className={styles.rightContainer}>
          <div className={styles.ads}>
            {(ads) && (sticky) &&
              ads
              .slice(0, 2)
              .map((ad: Ad) => {
                return ad.imgUrl && ad.href && <FeatAd imgUrl={ad.imgUrl} href={ad.href}/>
            })} 

            {(ads) && (!sticky) &&
              ads
              .map((ad: Ad) => {
                return ad.imgUrl && ad.href && <FeatAd imgUrl={ad.imgUrl} href={ad.href}/>
            })} 
          </div>
          {(sticky) &&
          <div className={styles.sticky}>
            {(ads) && (sticky) &&
              ads
              .slice(2, 4)
              .map((ad: Ad) => {
                return ad.imgUrl && ad.href && <FeatAd imgUrl={ad.imgUrl} href={ad.href}/>
              })}
          </div>}
          <div className={styles.mobileAds}>
            {ads && adslides && 
              <EmblaCarousel ad={true} slides={ads} options={OPTIONS} />}
            {ads && !adslides && 
              <FeatAd imgUrl={ads[0].imgUrl} href={ads[0].href}/>}
          </div>
        </div>
      </div>
    );
  }
}