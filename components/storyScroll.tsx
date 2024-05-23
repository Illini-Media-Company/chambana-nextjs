import Story from "@components/story";
import styles from "./storyScroll.module.css";
import FeatStory from "./featuredStory";
import FeatAd from "./featuredAd"

interface StoryScrollProps {
  storyCount?: number;
  stories: any;
}

export default function StoryScroll({ storyCount, stories }: StoryScrollProps) {
  if (storyCount) {
    return (
      <div>
        <div className={styles.row}>
          {/* TODO: redo this css! */}
          <div className={styles.column + " " + styles.left}>
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
          <div className={styles.column + " " + styles.right}>
            <FeatAd imgUrl="/placeholder.webp" href="https://dailyillini.com"/>
            <FeatAd imgUrl="/placeholder.webp" href="https://dailyillini.com"/>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div className={styles.row}>
          <div className={styles.column + " " + styles.left}>
            {stories &&
              stories.map((story: any) => (
                <Story
                  title={story.title}
                  tag={story.tags}
                  url={story.slug}
                  imgUrl={story.imgUrl}
                  createdBy={story.publishedBy}
                  createdAt={story.publishedAt}
                  key={story.slug}
                />
              ))}
          </div>
          <div className={styles.column + " " + styles.right}>
            <FeatAd imgUrl="/placeholder.webp" href="https://dailyillini.com"/>
            <FeatAd imgUrl="/placeholder.webp" href="https://dailyillini.com"/>
          </div>
        </div>
      </div>
    );
  }
}