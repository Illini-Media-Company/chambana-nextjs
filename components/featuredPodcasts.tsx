import styles from './featuredPodcasts.module.css'
import Image from 'next/image'

export default function FeaturedPodcasts() {
    return(
        <div>
            <h1 className={styles.title}>Our Shows</h1>
            <hr></hr>
            {/* Replace these images with featuredPodcast components that include title and show host */}
            <div className={styles.featContainer}>
                <Image 
                    src={'/placeholder.webp'}
                    alt={"podcast image"}
                    width={300}
                    height={300}
                    className={styles.imageContainer}
                />
                <Image 
                    src={'/placeholder.webp'}
                    alt={"podcast image"}
                    width={300}
                    height={300}
                    className={styles.imageContainer}
                />
                <Image 
                    src={'/placeholder.webp'}
                    alt={"podcast image"}
                    width={300}
                    height={300}
                    className={styles.imageContainer}
                />
                <Image 
                    src={'/placeholder.webp'}
                    alt={"podcast image"}
                    width={300}
                    height={300}
                    className={styles.imageContainer}
                />
            </div>

            <h1 className={styles.title}>Recent Episodes</h1>
            <hr></hr>
        </div>
    )
}