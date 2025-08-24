import styles from "./featuredStory.module.css";
import Image from "next/image";

function create_url(tag: string, url: string) {
  if (tag == "sponsored") tag = "news";
  return tag + "/" + url;
}

interface FeatStoryProps {
  title: string;
  url: string;
  tag: string;
  imgUrl?: string;
  description?: string;
  createdBy?: string;
  createdAt: string;
}

export default function FeatStory({
  title,
  url,
  tag,
  imgUrl,
  description,
  createdBy,
  createdAt,
}: FeatStoryProps) {
  const dateTime = new Date(createdAt);
  return (
    <a href={create_url(tag, url)} className={styles.featStory}>
      <div className={styles.parentContainer}>
        <div className={styles.imageContainer}>
          <Image
            src={imgUrl ? imgUrl : "/placeholder.webp"}
            alt={description ? description : "Featured Story"}
            priority
            width={300}
            height={200}
            className={styles.featStoryImage}
            unoptimized={true}
            quality={100}
          />
        </div>
        <div className={styles.column + " " + styles.title}>
          <h2 className={styles.title}>{title}</h2>
          <h3 className={styles.byline}>
            By {createdBy}, {dateTime.toLocaleDateString()}
          </h3>
        </div>
      </div>
    </a>
  );
}
