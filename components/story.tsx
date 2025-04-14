"use client";
import React from "react";
import styles from "./story.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";

function create_url(tag: string, url: string) {
  return tag + "/" + url;
}

interface Story {
  title: string;
  url: string;
  tag: string;
  imgUrl?: string;
  description?: string;
  createdBy?: string;
  createdAt: string;
}
              // 
export default function Story({
  title,
  url,
  tag,
  imgUrl,
  description,
  createdBy,
  createdAt,
}: Story) {
  const dateTime = new Date(createdAt);

  return (
    <a className={styles.link} href={create_url(tag, url)}>
      <div className={styles.container}>
        <div className={styles.leftContainer}>
          <Image
              src={imgUrl ? imgUrl : "/placeholder.webp"}
              alt={description ? description : "Featured Story"}
              height={166}
              width={250}
              className={styles.storyImage}
              loading="lazy"
              quality={100}
              unoptimized={true}
            />
        </div>
        <div className={styles.rightContainer}>
          <h2 className={styles.title}>{title}</h2>
          {createdBy && 
            <h3 className={styles.date}>By {createdBy}, {dateTime.toLocaleDateString()}</h3>
          }
        </div>
      </div>
    </a>
  );
}
