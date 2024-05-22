import styles from "./featured_story.module.css"
import Image from "next/image"

interface FeatStoryProps {
    title: string
    url: string
    imgUrl?: string
    description?: string
    createdBy: string
    createdAt: string
}

export default function FeatStory({
    title,
    url,
    imgUrl,
    description,
    createdBy,
    createdAt

}: FeatStoryProps) {
    return (
        <div>
            <div className={styles.parentContainer}>
                <div className = {styles.row}>
                    <div className={styles.column + ' ' + styles.imageContainer}>
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
                    </div>
                    <div className={styles.column + ' ' + styles.title}>
                        <h1>{title}</h1>
                        <h3>By: {createdBy}, {createdAt}</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}