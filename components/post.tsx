import {PortableText} from "@portabletext/react"
import styles from "./post.module.css"
import FeatAd from "./featuredAd"
import Image from 'next/image'
import urlBuilder from '@sanity/image-url'
import client from "../app/sanity"

interface PostProps {
    story: any
    ads?: any
}

const myPortableTextComponents = {
  types: {
    image: ({value, isInLine}: {value: any, isInLine?: any}) => 
      <img src={urlBuilder(client)
                .image(value)
                .height(400)
                .auto('format')
                .url()} 
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

export default async function Post({story, ads}: PostProps) {
  console.log(story)
    return (
        <div className={styles.container}>
            <div className={styles.leftContainer}>
                <h1 className={styles.title}>{story.title}</h1>
                <h3 className={styles.byline}>By: {story.publishedBy}, {new Date(story.publishedAt).toLocaleDateString()}</h3>
                <div className={styles.body}>
                  <PortableText value={story.body} components={myPortableTextComponents}/>
                </div>
            </div>
            <div className={styles.rightContainer}>
                <FeatAd imgUrl="/placeholder.webp" href="https://dailyillini.com"/>
                <FeatAd imgUrl="/placeholder.webp" href="https://dailyillini.com"/>
            </div>
        </div>
    )
}
