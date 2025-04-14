'use client'

import Story from "@components/story";
import styles from "./storyScroll.module.css";
import FeatStory from "./featuredStory";
import FeatAd from "./featuredAd"
import Newsletter from "./newsletter"
import EmblaCarousel from "./EmblaCarousel";
import { EmblaOptionsType } from 'embla-carousel';
import { Ad, Story as SanityStory} from "@/sanity.types";
import Script from "next/script";

function throwError(msg: string): never {
  throw new Error(msg)
}

interface StoryScrollProps {
  storyCount?: number;
  stories: SanityStory[];
  ads?: Ad[];
  inverse?: boolean;
  adslides?: boolean;
  sticky?: boolean;
}

export default function StoryScroll({ storyCount, stories, ads, inverse, adslides = true, sticky = false }: StoryScrollProps) {
  const OPTIONS: EmblaOptionsType = { loop: true }
  const u = process.env.NEXT_PUBLIC_IMAGE_ENDPOINT ?? throwError('Could not find image endpoint')
  const replacement='.'
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
                  key={story._id}
                  title={story.title}
                  tag={story.tags}
                  url={story.slug.current ? story.slug.current : ""}
                  imgUrl={(story.poster && story.poster.asset && story.poster.asset._ref) ? u + story.poster?.asset?._ref.slice(6).replace(/-([^-]*)$/, replacement + '$1') : undefined}
                  createdBy={story.publishedBy}
                  createdAt={story.publishedAt}
                />
              ))}
        </div>
        <div className={styles.rightContainer}>
          <div className={styles.ads}>
            <ins
              data-type="broadstreet"
              data-zone-id="174930"
              data-click-url-empty="">
              <Script src="https://cdn.broadstreetads.com/init-2.min.js" async></Script>
            </ins>
            <ins
              data-type="broadstreet"
              data-zone-id="174930"
              data-click-url-empty="">
              <Script src="https://cdn.broadstreetads.com/init-2.min.js" async></Script>
            </ins>
            <ins
              data-type="broadstreet"
              data-zone-id="174930"
              data-click-url-empty="">
              <Script src="https://cdn.broadstreetads.com/init-2.min.js" async></Script>
            </ins>
          </div>
          <div className={styles.mobileAds}>
            <ins
              data-type="broadstreet"
              data-zone-id="174930"
              data-click-url-empty="">
              <Script src="https://cdn.broadstreetads.com/init-2.min.js" async></Script>
            </ins>
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
                  key={story._id}
                  title={story.title}
                  tag={story.tags}
                  url={story.slug.current ? story.slug.current : ""}
                  imgUrl={(story.poster && story.poster.asset && story.poster.asset._ref) ? u + story.poster?.asset?._ref.slice(6).replace(/-([^-]*)$/, replacement + '$1') : undefined}
                  createdBy={story.publishedBy}
                  createdAt={story.publishedAt}
                />
              ))}
        </div>
        <div className={styles.rightContainer}>
          <div className={styles.ads}>
            <ins
              data-type="broadstreet"
              data-zone-id="174930"
              data-click-url-empty="">
              <Script src="https://cdn.broadstreetads.com/init-2.min.js" async></Script>
            </ins>
          </div>
          <div className={styles.ads}>
            <ins
              data-type="broadstreet"
              data-zone-id="174930"
              data-click-url-empty="">
              <Script src="https://cdn.broadstreetads.com/init-2.min.js" async></Script>
            </ins>
          </div>
          {(sticky) &&
          <div className={styles.sticky}>
              <ins
                data-type="broadstreet"
                data-zone-id="174930"
                data-click-url-empty="">
                <Script src="https://cdn.broadstreetads.com/init-2.min.js" async></Script>
              </ins>
              <ins
                data-type="broadstreet"
                data-zone-id="174930"
                data-click-url-empty="">
                <Script src="https://cdn.broadstreetads.com/init-2.min.js" async></Script>
              </ins>
          </div>}
          <div className={styles.mobileAds}>
            <ins
              data-type="broadstreet"
              data-zone-id="174930"
              data-click-url-empty="">
              <Script src="https://cdn.broadstreetads.com/init-2.min.js" async></Script>
            </ins>
          </div>
        </div>
      </div>
    );
  }
}