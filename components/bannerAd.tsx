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
        <a href="https://dailyillini.com" className={styles.bannerAdContainer}>
          <Image
            src={"/banner-placeholder.png"}
            alt={`Banner ad`}
            width="0"
            height="0"
            className={styles.bannerAd}
          />
        </a>
    );
}