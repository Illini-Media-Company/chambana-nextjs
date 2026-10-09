import styles from "./featured.module.css";
import MainStory from "./mainStory";
import FeatStory from "./featuredStory";
import Newsletter from "./newsletter";
import { Story as SanityStory } from "@/sanity.types";
import Script from "next/script";
import { imageEndpoint } from "@/sanity/env";

export default function Featured({
  stories,
}: {
  stories: SanityStory[];
}) {
  const u = imageEndpoint;
  const replacement = ".";

  return (
    <div className={styles.container}>
      <div className={styles.leftContainer}>
        {stories[0]?.title &&
          stories[0]?.slug &&
          stories[0]?.tags &&
          stories[0]?.publishedAt && (
            <MainStory
              title={stories[0].title}
              imgUrl={
                u +
                stories[0].poster?.asset?._ref
                  .slice(6)
                  .replace(/-([^-]*)$/, replacement + "$1")
              }
              url={stories[0].slug.current ?? ""}
              tag={stories[0].tags}
              createdBy={stories[0].publishedBy}
              createdAt={stories[0].publishedAt}
            />
          )}
        {stories &&
          stories
            .slice(1, 4)
            .map(
              (story: SanityStory) =>
                story.title &&
                story.slug &&
                story.tags &&
                story.publishedAt && (
                  <FeatStory
                    title={story.title}
                    url={story.slug.current ?? ""}
                    tag={story.tags}
                    imgUrl={
                      u +
                      story.poster?.asset?._ref
                        .slice(6)
                        .replace(/-([^-]*)$/, replacement + "$1")
                    }
                    createdBy={story.publishedBy}
                    createdAt={story.publishedAt}
                    key={story._id}
                  />
                ),
            )}
      </div>
      {/* TODO: redo this css */}
      <div className={styles.rightContainer}>
        <Newsletter recaptchaKey={process.env.GOOGLE_RECAPTCHA_KEY} />
        <div className={styles.carousel}>
          <ins
            data-type="broadstreet"
            data-zone-id="174930"
            data-click-url-empty=""
          >
            <Script
              src="https://cdn.broadstreetads.com/init-2.min.js"
              async
            ></Script>
          </ins>
        </div>

        <div className={styles.ads}>
          <ins
            data-type="broadstreet"
            data-zone-id="174930"
            data-click-url-empty=""
          >
            <Script
              src="https://cdn.broadstreetads.com/init-2.min.js"
              async
            ></Script>
          </ins>
          <ins
            data-type="broadstreet"
            data-zone-id="174930"
            data-click-url-empty=""
          >
            <Script
              src="https://cdn.broadstreetads.com/init-2.min.js"
              async
            ></Script>
          </ins>
          <ins
            data-type="broadstreet"
            data-zone-id="174930"
            data-click-url-empty=""
          >
            <Script
              src="https://cdn.broadstreetads.com/init-2.min.js"
              async
            ></Script>
          </ins>
        </div>
      </div>
    </div>
  );
}
