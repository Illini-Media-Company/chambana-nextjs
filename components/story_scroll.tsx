import Story from "@components/story"
import styles from "./story_scroll.module.css"
import FeatStory from "./featured_story"

interface StoryScrollProps {
    storyCount?: number
    stories: any
}

export default function StoryScroll({
    storyCount,
    stories
}: StoryScrollProps) {
    if (storyCount) {
        return (
            <div>
            <div className={styles.row}>
              <div className={styles.column + ' ' + styles.left}>
                {stories && stories.slice(0,storyCount).map((story: any) => (
                  <Story
                    title={story.title}
                    url="dailyillini.com"
                    imgUrl={story.imgUrl}
                    createdBy={story.publishedBy}
                    createdAt={story.publishedAt}
                  />
                ))}
              </div>
            </div>
            </div>
        )
    } else {
      return (
        <div>
        <div className={styles.row}>
          <div className={styles.column + ' ' + styles.left}>
            {stories && stories.map((story: any) => (
              <Story
                title={story.title}
                url="dailyillini.com"
                imgUrl={story.imgUrl}
                createdBy={story.publishedBy}
                createdAt={story.publishedAt}
              />
            ))}
          </div>
        </div>
        </div>
      )
    }
}