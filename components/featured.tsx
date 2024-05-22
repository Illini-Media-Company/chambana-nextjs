import * as React from "react";
import Image from 'next/image'
import styles from './featured.module.css'
import MainStory from './main_story'
import FeatStory from './featured_story'
import FeatAd from './featuredAd'
import BannerAd from './bannerAd'

interface StoryProps {
  children: React.ReactNode;
}

export default async function Featured({stories, featAds}:{stories:any, featAds:any}) {
  return (
    <div>
    <div className={styles.row}>
      <div className={styles.column + ' ' + styles.left}>
        <MainStory title={stories[0].title} url={stories[0].url} createdBy={stories[0].publishedBy} createdAt={stories[0].publishedAt} />
        {stories && stories.slice(1,4).map((story: any) => (
          <FeatStory
            title={story.title}
            url="dailyillini.com"
            imgUrl={story.imgUrl}
            createdBy={story.publishedBy}
            createdAt={story.publishedAt}
          />
        ))}
      </div>
      <div className={styles.column + ' ' + styles.right}>
        {featAds && featAds.map((ad: any) => (
          <FeatAd
            imgUrl = {ad.imgUrl}
            href = {ad.href} 
          />
        ))}
      </div>
    </div>
    </div>
  );
}