import styles from './featuredPodcasts.module.css'
import Image from 'next/image'
import Podcast from './embeddedPodcast'
import Show from './podcastShows'
import PodcastCarousel from './PodcastCarousel'
import {showItems} from '@/app/podcastShows'
import { EmblaOptionsType } from 'embla-carousel';
import EmblaCarousel from './EmblaCarousel'
import { ShowItem } from '@/types/showItem';

export default function FeaturedPodcasts() {
    const OPTIONS: EmblaOptionsType = { loop: true };
    return(
        <div>
            <h1 className={styles.title}>Our Shows</h1>
            <hr></hr>
            {/* Replace these images with featuredPodcast components that include title and show host */}
            <div className={styles.featContainer}>
                {showItems &&
                    showItems.map((show: ShowItem, index: number) => (
                        <Show key={index} title={show.title} host={show.host} image={show.imgUrl} href={show.href} />
                    ))}
            </div>
            <div className={styles.mobile}>
                <PodcastCarousel slides={showItems} options={OPTIONS}/>
            </div>

            <h1 className={styles.title}>Recent Episodes</h1>
            <hr></hr>
        </div>
    )
}