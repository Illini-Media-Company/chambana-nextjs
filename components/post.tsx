import {PortableText} from "@portabletext/react";
import styles from "./post.module.css";
import FeatAd from "./featuredAd";
import Image from 'next/image';
import urlBuilder from '@sanity/image-url';
import client from "../app/sanity";
import EmblaCarousel from "./EmblaCarousel";
import { EmblaOptionsType } from 'embla-carousel';
import { Ad, Story, PageAd } from "@/sanity.types";

function throwError(msg: string): never {
  throw new Error(msg)
}

interface PostProps {
    story: Story
    ads?: PageAd[]
}

const myPortableTextComponents = {
  types: {
    image: ({value, isInLine}: {value: any, isInLine?: any}) => 
      <img src={urlBuilder(client)
                .image(value)
                .height(400)
                .auto('format')
                .url()} 
            loading="lazy"
            className={styles.imageContainer}/>,
    callToAction: ({value, isInline}: {value: any, isInline: any}) =>
      isInline ? (
        <a href={value.url}>{value.text}</a>
      ) : (
        <div className="callToAction">{value.text}</div>
      ),
  },

  block: {
    // Ex. 1: customizing common block types
    blockquote: ({ children }: {children?: any}) => (
      <blockquote className="border-l-purple-500">{children}</blockquote>
    ),
  },

  marks: {
    link: ({children, value}: {children?: any, value?: any}) => {
      const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined
      return (
        <a href={value.href} rel={rel} target="_blank">
          {children}
        </a>
      )
    },
  },
}

export default function Post({story, ads}: PostProps) {
  const OPTIONS: EmblaOptionsType = { loop: true };
  const SLIDE_COUNT = 5;
  const IMAGES = story.gallery;
  const u = process.env.NEXT_PUBLIC_IMAGE_ENDPOINT ?? throwError('Could not find image endpoint');
  const replacement='.';


  // THIS IS THE TEMPLATE FOR ADDING ADS TO THE MIDDLE OF THE PORTABLE TEXT

  // story.body.push(
  //   {    
  //     asset: {
  //       _ref: 'image-19bc486b92afd40f0db056173aa60486f1c286a5-4000x2015-jpg',
  //       _type: 'reference'
  //     },
  //     _type: 'image'
  //   }
  // )
  // console.log(IMAGES)
  
  return (
      <div className={styles.container}>
          <div className={styles.leftContainer}>
              <h1 className={styles.title}>{story.title}</h1>
              {story.publishedBy && story.publishedAt &&
                <h3 className={styles.byline}>By: {story.publishedBy}, {new Date(story.publishedAt).toLocaleDateString()}</h3>}
              <div className={styles.body}>
                {(IMAGES) && 
                  <div className={styles.gallery}><EmblaCarousel slides={IMAGES} options={OPTIONS} /></div>}
                {story.body &&
                <PortableText value={story.body} components={myPortableTextComponents}/>}
              </div>
          </div>
          <div className={styles.rightContainer}>
              <div className={styles.ads}>
                {ads &&
                  ads.map((ad: PageAd) => {
                    return (ad.ad?.asset?._ref && ad.href) && <FeatAd imgUrl={u + ad.ad?.asset?._ref.slice(6).replace(/-([^-]*)$/, replacement + '$1')} href={ad.href} key={ad._id}/>
                  })}
              </div>
              <div className={styles.mobileAds}>
                {ads && 
                  <EmblaCarousel ad={true} slides={ads} options={OPTIONS}/>}
              </div>
          </div>
      </div>
  )
}