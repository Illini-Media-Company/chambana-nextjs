import styles from "./featuredAd.module.css"
import Image from "next/image"

interface FeatAdProps {
    imgUrl: string
    href: string
}

export default function FeatAd({imgUrl, href}: FeatAdProps) {
    if (!href.includes("https://")) {
        href = "https://" + href
    }
    return (
        <div>
        <div className={styles.parentContainer}>
            <a href={href}><Image
                src={imgUrl}
                alt={"Featured Ad"}
                priority
                height={250}
                width={300}
                className={styles.image}
                placeholder="blur"
                blurDataURL="/blur.png"
            /></a>
        </div>
        </div>
    );
}