'use client';
import React from 'react'
import styles from "./story.module.css"
import Image from "next/image"
import { useRouter } from "next/navigation"

function create_url(tag: string, url: string) {
    return tag + '/' + url
}

interface FeatStoryProps {
    title: string
    url: string
    tag: string
    imgUrl?: string
    description?: string
    createdBy: string
    createdAt: string
}

export default function FeatStory({
    title,
    url,
    tag,
    imgUrl,
    description,
    createdBy,
    createdAt

}: FeatStoryProps) {
    const router = useRouter();

    return (
        <div>
            <div className={styles.parentContainer}>
                <div className = {styles.row}>
                    <div className={styles.column + ' ' + styles.imageContainer}>
                        <a href={create_url(tag, url)}>
                            <Image
                                src={imgUrl ? imgUrl : '/placeholder.webp'}
                                alt={description ? description : "Featured Story"}
                                priority
                                layout='fill'
                                objectFit='contain'
                                objectPosition='left'
                                style = {{
                                    borderRadius: '5px'
                                }}
                            />
                        </a>
                    </div>
                    <div className={styles.column + ' ' + styles.title}>
                        <a href={create_url(tag, url)}><h2>{title}</h2></a>
                        <h4>By: {createdBy}, {createdAt}</h4>
                    </div>
                </div>
            </div>
        </div>
    );
}