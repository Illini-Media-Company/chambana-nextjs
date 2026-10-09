import styles from "./bannerAd.module.css";
import Image from "next/image";

interface BannerAdProps {
  imgUrl: string;
  href: string;
}

export default function BannerAd({ imgUrl, href }: BannerAdProps) {
  return (
    <a href={href} className={styles.bannerAdContainer}>
      <Image
        src={imgUrl}
        alt="Banner advertisement"
        width={1200}
        height={150}
        className={styles.bannerAd}
        unoptimized
      />
    </a>
  );
}