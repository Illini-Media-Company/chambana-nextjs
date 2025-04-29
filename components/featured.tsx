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
import { Ad, Story as SanityStory } from "@/sanity.types";
import Script from "next/script"
import Story from "./story";
import { url } from "inspector";

function throwError(msg: string): never {
  throw new Error(msg)
}

export default async function Featured({
  stories,
  featAds,
}: {
  // TODO: this is a bit of a code smell, use a type for the stories and ads! google 'sanity typegen' for an automatic way to do it
  stories: SanityStory[];
  featAds: Ad[];
}) {
  const OPTIONS: EmblaOptionsType = { loop: true }
  const u = process.env.NEXT_PUBLIC_IMAGE_ENDPOINT ?? throwError('Could not find image endpoint')
  const replacement='.'

  // console.log(u + featAds[0].ad?.asset?._ref.slice(6).replace(/-([^-]*)$/, replacement + '$1'))

  return (
    <div className={styles.container}>
      <div className={styles.leftContainer}>
        {stories[0].title && stories[0].slug && stories[0].tags && stories[0].publishedAt &&
          <MainStory
          title={stories[0].title}
          imgUrl={u + stories[0].poster?.asset?._ref.slice(6).replace(/-([^-]*)$/, replacement + '$1')}
          url={stories[0].slug.current ?? ""}
          tag={stories[0].tags}
          createdBy={stories[0].publishedBy}
          createdAt={stories[0].publishedAt}
        />}
        {stories &&
          stories
            .slice(1, 4)
            .map((story: SanityStory) => (
              story.title && story.slug && story.tags && story.publishedAt &&
              <FeatStory
                title={story.title}
                url={story.slug.current ?? ""}
                tag={story.tags}
                imgUrl={u + story.poster?.asset?._ref.slice(6).replace(/-([^-]*)$/, replacement + '$1')}
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
          {/* <EmblaCarousel ad={true} slides={featAds} options={OPTIONS}/> */}
          <ins
              data-type="broadstreet"
              data-zone-id="174930"
              data-click-url-empty="">
            <Script src="https://cdn.broadstreetads.com/init-2.min.js" async></Script>
          </ins>
        </div>

        <div className={styles.ads}>
          {/* {(featAds) &&
            featAds.map((ad: Ad) => (
            ad.ad && ad.ad.asset && ad.ad.asset._ref && ad.href &&
              <FeatAd imgUrl={u + ad.ad?.asset?._ref.slice(6).replace(/-([^-]*)$/, replacement + '$1')} href={ad.href} key={ad._id} />
          ))} */}
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
