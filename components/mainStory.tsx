import React from "react";
import Image from "next/image";
import styles from "./mainStory.module.css";
import { create } from "domain";

function create_url(tag: string, url: string) {
  return tag + "/" + url;
}

interface MainStoryProps {
  title: string;
  imgUrl?: string;
  url: string;
  tag: string;
  createdBy?: string;
  createdAt: string;
}

export default function MainStory({
  title,
  imgUrl,
  url,
  tag,
  createdBy,
  createdAt,
}: MainStoryProps) {
  var defImgUrl = "/placeholder.webp";
  const dateTime = new Date(createdAt);
  return (
    <a className={styles.link} href={create_url(tag, url)}>
      <div>
        <div className={styles.title}>
          <h1>{title}</h1>
          <h2>
            By {createdBy}, {dateTime.toLocaleDateString()}
          </h2>
        </div>
        <div>
          <Image
            priority
            src={imgUrl ? imgUrl : defImgUrl}
            alt={title}
            width={600}
            height={400}
            className={styles.mainImage}
          />
        </div>
      </div>
    </a>
  );
}
