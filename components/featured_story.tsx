import styles from "./featured_story.module.css"
import Image from "next/image"

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
    const dateTime = new Date(createdAt);
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
                        <a style={{textDecoration: 'none'}} href={create_url(tag, url)}><h1>{title}</h1></a>
                        <h3>By: {createdBy}, {dateTime.toLocaleDateString()}</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}