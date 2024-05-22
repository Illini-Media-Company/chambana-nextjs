import React from 'react'
import Image from 'next/image'
import styles from './main_story.module.css'

interface MainStoryProps {
    title: string
    imgUrl?: string
    url: string
    createdBy: string
    createdAt: string
}



export default function MainStory({
    title,
    imgUrl,
    url,
    createdBy,
    createdAt
}: MainStoryProps) {
    var defImgUrl = '/placeholder.webp';
    return (
        <div>
            <div className={styles.title}>
                <h1>{title}</h1>
                <h4>By: {createdBy}, {createdAt}</h4>
            </div>
            <div className={styles.parentContainer}>
                <Image 
                    priority
                    src={defImgUrl}
                    alt={title}
                    layout="fill"
                    objectFit="contain"
                    objectPosition="left"
                    style = {{
                        borderRadius: '5px'
                    }}
                />
            </div>
        </div>
    );
}