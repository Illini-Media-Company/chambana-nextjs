import Story from "@components/story";
import styles from "./storyScroll.module.css";
import FeatStory from "./featuredStory";
import FeatAd from "./featuredAd"
import Newsletter from "./newsletter"
import EmblaCarousel from "./EmblaCarousel";
import { EmblaOptionsType } from 'embla-carousel';

interface StoryScrollProps {
  storyCount?: number;
  stories: any;
  ads?: any;
  inverse?: boolean;
}

export default function StoryScroll({ storyCount, stories, ads, inverse }: StoryScrollProps) {
  // console.log(stories)
  const OPTIONS: EmblaOptionsType = { loop: true }
  if (storyCount) {
    return (
      <div className={styles.container}>
        <div className={styles.leftContainer}>
          {stories &&
            stories
              .slice(0, storyCount)
              .map((story: any) => (
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
            ads.map((ad: any) => {
              return <FeatAd imgUrl={ad.imgUrl} href={ad.href}/>
            })} 
          </div>
          <div className={styles.mobileAds}>
            {ads &&
              <EmblaCarousel ad={true} slides={ads} options={OPTIONS} />}
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
              .map((story: any) => (
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
            ads.map((ad: any) => {
              return <FeatAd imgUrl={ad.imgUrl} href={ad.href}/>
            })} 
          </div>
          <div className={styles.mobileAds}>
            <EmblaCarousel ad={true} slides={ads} options={OPTIONS} />
          </div>
        </div>
      </div>
    );
  }
}