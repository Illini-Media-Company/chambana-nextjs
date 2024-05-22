import styles from "./banner.module.css"
import Image from 'next/image'
interface BannerAdProps {
    imgUrl: string
    href: string
}

export default function BannerAd({
    imgUrl,
    href
}: BannerAdProps) {
    return(
        <div className={styles.parentContainer}>
            <Image
                src={imgUrl}
                alt={"Banner Ad"}
                priority
                fill
                objectFit="contain"
            />
        </div>
    );
}