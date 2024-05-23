"use client";
import React from "react";
import styles from "./story.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";

function create_url(tag: string, url: string) {
  return tag + "/" + url;
}

interface FeatStoryProps {
  title: string;
  url: string;
  tag: string;
  imgUrl?: string;
  description?: string;
  createdBy: string;
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
  const router = useRouter();
  const dateTime = new Date(createdAt);

  return (
    <div>
      <div className={styles.parentContainer}>
        <div className={styles.row}>
          <div className={styles.column + " " + styles.imageContainer}>
            <a href={create_url(tag, url)}>
              {/* TODO: remove inline css */}
              <Image
                src={imgUrl ? imgUrl : "/placeholder.webp"}
                alt={description ? description : "Featured Story"}
                priority
                height={166}
                width={250}
                className={styles.storyImage}
              />
            </a>
          </div>
          <div className={styles.column + " " + styles.title}>
            {/* TODO: remove inline styles */}
            <a style={{ textDecoration: "none" }} href={create_url(tag, url)}>
              <h2>{title}</h2>
            </a>
            <h4>
              By: {createdBy}, {dateTime.toLocaleDateString()}
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}
