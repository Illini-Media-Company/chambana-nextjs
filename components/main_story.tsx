import React from 'react'
import Image from 'next/image'
import styles from './main_story.module.css'
import { create } from 'domain'

function create_url(tag: string, url: string) {
    return tag + '/' + url
}

interface MainStoryProps {
    title: string
    imgUrl?: string
    url: string
    tag: string
    createdBy: string
    createdAt: string
}

export default function MainStory({
    title,
    imgUrl,
    url,
    tag,
    createdBy,
    createdAt
}: MainStoryProps) {
    var defImgUrl = '/placeholder.webp';
    return (
        <div>
            <div className={styles.title}>
                <a href={create_url(tag, url)}><h1>{title}</h1></a>
                <h4>By: {createdBy}, {createdAt}</h4>
            </div>
            <div className={styles.parentContainer}>
                <a href={create_url(tag, url)}>
                    <Image 
                    priority
                    src={imgUrl ? imgUrl : defImgUrl}
                    alt={title}
                    layout="fill"
                    objectFit="contain"
                    objectPosition="left"
                    style = {{
                        borderRadius: '5px'
                    }}
                    />
                </a>
            </div>
        </div>
    );
}