import {PortableText} from "@portabletext/react"
import styles from "./post.module.css"
import FeatAd from "./featuredAd"
import Image from 'next/image'

interface PostProps {
    story: any
}
const myPortableTextComponents = {
    types: {
      image: ({value}: {value: any}) => <img src={value.imageUrl} />,
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
          <a href={value.href} rel={rel}>
            {children}
          </a>
        )
      },
    },
  }


export default async function Post({story}: PostProps) {
  console.log(story)
    return (
        <div className={styles.container}>
            <div className={styles.leftContainer}>
                <h1 className={styles.title}>{story.title}</h1>
                <h3 className={styles.byline}>By: {story.publishedBy}, {new Date(story.publishedAt).toLocaleDateString()}</h3>
                {(story.imageUrl) &&
                  <Image src={story.imageUrl} alt={"main image"} width={600} height={400} className={styles.imageContainer}/>
                }
                <div className={styles.body}><PortableText value={story.body} components={myPortableTextComponents}/></div>
            </div>
            <div className={styles.rightContainer}>
                <FeatAd imgUrl="/placeholder.webp" href="https://dailyillini.com"/>
                <FeatAd imgUrl="/placeholder.webp" href="https://dailyillini.com"/>
            </div>
        </div>
    )
}

export const revalidate = 60;