import Story from "@components/story";
import styles from "./storyScroll.module.css";
import FeatStory from "./featuredStory";
import FeatAd from "./featuredAd"

interface StoryScrollProps {
  storyCount?: number;
  stories: any;
}
            {/*  */}
export default function StoryScroll({ storyCount, stories }: StoryScrollProps) {
  console.log(stories)
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
          <FeatAd imgUrl="/placeholder.webp" href="https://dailyillini.com"/>
          <FeatAd imgUrl="/placeholder.webp" href="https://dailyillini.com"/>
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
          <FeatAd imgUrl="/placeholder.webp" href="https://dailyillini.com"/>
          <FeatAd imgUrl="/placeholder.webp" href="https://dailyillini.com"/>
        </div>
      </div>
    );
  }
}